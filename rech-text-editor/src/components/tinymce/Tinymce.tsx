// index.jsx
import React, { useState, useEffect } from 'react';
// import EditorImage from './components/EditorImage';
import plugins from './plugins';
import toolbar from './toolbar';
import dynamicLoadScript from './dynamicLoadScript';
import EditorImage from './EditorImage';

const Tinymce = ({ id, value, toolbar: customToolbar, menubar, height, width }) => {
  const [hasChange, setHasChange] = useState(false);
  const [hasInit, setHasInit] = useState(false);
  const [tinymceId, setTinymceId] = useState(id);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    init();
    return destroyTinymce;
  }, []);

  const init = () => {
    dynamicLoadScript('https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js', (err) => {
      if (err) {
        alert(err.message);
        return;
      }
      initTinymce();
    });
  };

  const initTinymce = () => {
    window.tinymce.init({
      selector: `#${tinymceId}`,
      language: 'en',
      height: height,
      body_class: 'panel-body ',
      object_resizing: false,
      toolbar: customToolbar.length > 0 ? customToolbar : toolbar,
      menubar: menubar,
      plugins: plugins,
      end_container_on_empty_block: true,
      powerpaste_word_import: 'clean',
      code_dialog_height: 450,
      code_dialog_width: 1000,
      advlist_bullet_styles: 'square',
      advlist_number_styles: 'default',
      imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
      default_link_target: '_blank',
      link_title: false,
      nonbreaking_force_tab: true,
      convert_urls: false,
      setup: (editor) => {
        editor.on('FullscreenStateChanged', (e) => {
          setFullscreen(e.state);
        });
        editor.on('NodeChange Change KeyUp SetContent', () => {
          setHasChange(true);
          // Assuming input is a prop that updates the content in the parent component
          // You can replace this with your desired state management logic
          // Example: setInputContent(editor.getContent());
        });
      },
    });
  };

  const destroyTinymce = () => {
    const tinymce = window.tinymce.get(tinymceId);
    if (fullscreen) {
      tinymce.execCommand('mceFullScreen');
    }

    if (tinymce) {
      tinymce.destroy();
    }
  };

  return (
    <div className={`tinymce-container ${fullscreen ? 'fullscreen' : ''}`} style={{ width: width }}>
      <textarea id={tinymceId} className="tinymce-textarea" />
      <div className="editor-custom-btn-container">
        <EditorImage color="#1890ff" className="editor-upload-btn" successCBK={imageSuccessCBK} />
      </div>
    </div>
  );
};

export default Tinymce;
