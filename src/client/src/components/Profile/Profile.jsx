import style from "./profile.module.css";
import {
  Box,
  TextField,
  Slider,
  Switch,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Profile({ profile, updateProfileAction, resetProfileAction }) {

  const navigate = useNavigate();
  useEffect(() => {
    if (!profile.email) {
      navigate("/login");
    }
  }, [profile, navigate]);

  const [edit, setEdit] = useState(false);
  const [profileObj, setProfileObj] = useState(profile);

  // useEffect(() => {
  //   if (userEmail) {
  //     if (!profile.id) fetchProfileAction(userEmail);
  //   }
  // }, []);

  useEffect(() => {
    setProfileObj(profile);
  }, [profile]);

  const handleChange = (event) => {
    setProfileObj({ ...profileObj, [event.target.id]: event.target.value });
  };

  const handlePreferencesAgeRangeChange = (event) => {
    setProfileObj({
      ...profileObj,
      ["preferences"]: {
        ...profileObj.preferences,
        minAge: event.target.value[0],
        maxAge: event.target.value[1],
      },
    });
  };

  const handleGenderChange = (event) => {
    setProfileObj({
      ...profileObj,
      ["preferences"]: {
        ...profileObj.preferences,
        relation_type: event.target.value,
      },
    });
  };

  const handleRelationsChange = (event) => {
    setProfileObj({
      ...profileObj,
      ["preferences"]: {
        ...profileObj.preferences,
        gender: event.target.value,
      },
    });
  };

  return profile.id ? (
    <div className={style.profile_container}>
      <div className={style.profile_top_container}>
        <div className={style.profile_picture_container}>
          <img
            className={style.profile_picture}
            src={profileObj.picture}
            alt="profile-picture"
          />
        </div>
        <h1>{profileObj.email}</h1>
      </div>
      <div className={style.info_container}>
        <Box className={style.info_field_container}>
          <TextField
            type={"text"}
            disabled={!edit}
            label="User Name"
            id="userName"
            value={profileObj.userName || ""}
            onChange={handleChange}
          />
          <Button onClick={() => resetProfileAction({})}>
            Logout
          </Button>
        </Box>
        <div className={style.info_field_container}>
          <Box className={style.info_field_container_small}>
            <Select
              disabled={!edit}
              className={style.gender_select}
              id="gender"
              value={profileObj.gender || ""}
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"other"}>Other</MenuItem>
            </Select>
          </Box>
          <Box className={style.info_field_container_small}>
            <TextField
              type={"number"}
              max={55}
              min={18}
              disabled={!edit}
              label="Age"
              id="age"
              value={profileObj.age || ""}
              onChange={handleChange}
            />
          </Box>
        </div>

        <Box className={style.info_field_container}>
          <TextField
            inputProps={{ inputMode: "tel" }}
            disabled={!edit}
            label="Phone Number"
            id="phone"
            value={profileObj.phone || ""}
            onChange={handleChange}
          />
        </Box>
        <Box className={style.info_field_container}>
          <TextField
            disabled={!edit}
            label="Location"
            id="location"
            value={profileObj.location || ""}
            onChange={handleChange}
          />
        </Box>
      </div>
      <div className={style.preferences_container}>
        {/* <Box className={style.pref_field_container}>
          <h1>Mate type</h1>
          <span className={style.rel_pref}>
            <h2>Friendly</h2>
            <Switch color="primary" defaultChecked disabled={!edit} />
            <h2>Romantic</h2>
          </span>
        </Box> */}
        <Box className={style.pref_field_container}>
          <h1>Relations</h1>
          <Select
            disabled={!edit}
            className={style.pref_gender_select}
            id="Relations"
            value={profileObj.preferences.relation_type || "romantic"}
            label="Relations"
            onChange={handleRelationsChange}
          >
            <MenuItem value={"romantic"}>Romantic</MenuItem>
            <MenuItem value={"friends"}>Friends</MenuItem>
          </Select>
        </Box>
        <Box className={style.pref_field_container}>
          <h1>Mate Age</h1>
          <span className={style.pref_age_label}>
            {profileObj.preferences.minAge +
              "-" +
              profileObj.preferences.maxAge}
          </span>
          <span className={style.pref_age_slider_container}>
            <h2>{18}</h2>
            <Slider
              disabled={!edit}
              className={style.pref_age_slider}
              value={
                [
                  profileObj.preferences.minAge,
                  profileObj.preferences.maxAge,
                ] || [20, 45]
              }
              onChange={handlePreferencesAgeRangeChange}
              valueLabelDisplay="auto"
              min={18}
              max={55}
            />
            <h2>55</h2>
          </span>
        </Box>
        <Box className={style.pref_field_container}>
          <h1>Mate Gender</h1>
          <Select
            disabled={!edit}
            className={style.pref_gender_select}
            id="gender"
            value={profileObj.preferences.gender || "any"}
            label="Gender"
            onChange={handleGenderChange}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"any"}>Any</MenuItem>
          </Select>
        </Box>
      </div>
      {edit ? (
        <div className={style.save_cancel_btn_container}>
          <Button
            variant="contained"
            onClick={() => {
              //todo- only if changed
              updateProfileAction(profileObj);
              setEdit(false);
            }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setProfileObj(profile);
              setEdit(false);
            }}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <div className={style.save_cancel_btn_container}>
          <Button
            variant="contained"
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  ) : null;
}
