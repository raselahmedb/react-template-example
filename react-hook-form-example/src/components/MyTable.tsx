import { useEffect, useState } from "react";
import TableHeader from "./tables/divs/TableHeader";
import RowColumn from "./tables/divs/RowColumn";
import TableRows from "./tables/divs/TableRows";
import Table from "./tables/divs/Table";
import Button from "./Button";
import { activeInactiveUser, createDemoProfile, getAllDemoProfile } from "./../api/DemoProfileReq";
import Profile from "./../types/Profile";
import Popup from "./NotificationContainer";
// import { downloadImage } from './../api/ImageReq';

const MyTable = () => {
  const [profiles, setProfiles] = useState<Profile[]>();
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    getAllDemoProfile()
      .then((response) => {
        if (response) {
          setProfiles(response?.data?.data);
          console.log("all: ", response?.data?.data);
        }
      })
      .catch((error) => {
        <Popup content={error.message} variant="red" />
        console.log("error: ", error);
      });
  }, []); // Empty dependency array to run the effect only once on mount

  useEffect(() => {
    console.log("use effect: ", profile);
    
    if (profile) {
      profile.image  = null;
      profile.coverImage = null;
      createDemoProfile(profile)
        .then((response) => {
          if (response) {
            // setProfile(response?.data?.data);
            console.log("update Profile: ", response?.data?.data);
          }
        })
        .catch((error) => {
          console.log("error: ", error);
        });

      activeInactiveUser()
      .then((response) => {
        if (response) {
          console.log("User Active/Inactive response: ", response);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
    }
  }, [profile]);

  const handleEditClick = (index: number) => {
    if (profiles) setProfile(profiles[index]);
  };

  const handleDeleteClick = (index: number) => {
    if (profiles) {
      const prof = profiles[index];
      console.log("Delete Click Profile: ", prof);
      profiles.splice(index, 1);
      setProfiles(profiles);
    }

    // Add your edit logic here
  };

  return (
    <>
      <Table>
        <TableHeader key={Math.random()} className="text-center">
          <RowColumn children="ID" />
          <RowColumn children="Name" />
          <RowColumn children="Email" />
          <RowColumn children="Action" />
        </TableHeader>
        {profiles &&
          profiles.map((profile, index) => (
            <TableRows key={profile.id} className="hover:bg-slate-200">
              <RowColumn className="border p-2" children={profile.id} />
              <RowColumn
                className="border p-2"
                children={profile.firstName + " " + profile.lastName}
              />
              <RowColumn className="border p-2" children={profile.email} />
              <RowColumn className="border p-2 m-0 text-center">
                <Button onClick={() => handleEditClick(index)}>Edit</Button>
                <Button className="mx-1">View</Button>
                <Button onClick={() => handleDeleteClick(index)}>Delete</Button>
              </RowColumn>
            </TableRows>
          ))}
      </Table>
    </>
  );
};

export default MyTable;
