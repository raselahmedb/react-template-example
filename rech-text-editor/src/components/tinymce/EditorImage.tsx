// EditorImage.jsx
import React, { useState } from 'react';
import { Button, Dialog, Upload } from 'element-react';

const EditorImage = ({ color, className, successCBK }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [listObj, setListObj] = useState({});
  const [fileList, setFileList] = useState([]);

  const checkAllSuccess = () => {
    return Object.keys(listObj).every((item) => listObj[item].hasSuccess);
  };

  const handleSubmit = () => {
    const arr = Object.keys(listObj).map((v) => listObj[v]);
    if (!checkAllSuccess()) {
      alert('Please wait for all images to be uploaded successfully.');
      return;
    }
    successCBK(arr);
    setListObj({});
    setFileList([]);
    setDialogVisible(false);
  };

  const handleSuccess = (response, file) => {
    const uid = file.uid;
    const objKeyArr = Object.keys(listObj);
    for (let i = 0, len = objKeyArr.length; i < len; i++) {
      if (listObj[objKeyArr[i]].uid === uid) {
        listObj[objKeyArr[i]].url = response.files.file;
        listObj[objKeyArr[i]].hasSuccess = true;
        return;
      }
    }
  };

  const handleRemove = (file) => {
    const uid = file.uid;
    const objKeyArr = Object.keys(listObj);
    for (let i = 0, len = objKeyArr.length; i < len; i++) {
      if (listObj[objKeyArr[i]].uid === uid) {
        delete listObj[objKeyArr[i]];
        return;
      }
    }
  };

  const beforeUpload = (file) => {
    const fileName = file.uid;
    setListObj((prevListObj) => ({
      ...prevListObj,
      [fileName]: { hasSuccess: false, uid: file.uid, width: 0, height: 0 },
    }));
    return Promise.resolve(true);
  };

  return (
    <div className="upload-container">
      <Button style={{ background: color, borderColor: color }} icon="el-icon-upload" size="mini" type="primary" onClick={() => setDialogVisible(true)}>
        upload
      </Button>
      <Dialog visible={dialogVisible} onClose={() => setDialogVisible(false)}>
        <Upload
          multiple={true}
          fileList={fileList}
          showFileList={true}
          onRemove={handleRemove}
          onSuccess={handleSuccess}
          beforeUpload={beforeUpload}
          className="editor-slide-upload"
          action="https://httpbin.org/post"
          listType="picture-card"
        >
          <Button size="small" type="primary">
            Click upload
          </Button>
        </Upload>
        <Button onClick={() => setDialogVisible(false)}>Cancel</Button>
        <Button type="primary" onClick={handleSubmit}>
          Confirm
        </Button>
      </Dialog>
    </div>
  );
};

export default EditorImage;
