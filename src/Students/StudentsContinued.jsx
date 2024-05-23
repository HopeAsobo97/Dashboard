import { Avatar, Box, Button, Grid } from "@mui/material";
import React from "react";
import Props from "../props/Props";

const StudentsContinued = () => {
  return (
    <div>
      <Box className="m-5 overflow-hidden scroll-m-1 w-[91.5%]">
        <Grid>
          <Grid item>
            <Props header="Students" />
            <div
              className="bg-[#D60A0B] mb-3"
              style={{ width: "35px", height: "2px" }}
            ></div>
          </Grid>
          <Grid className="m-5 p-5 rounded bg-white">
            <h6 className=" font-semibold">Add Student</h6>
            <h6 className="text-[#186318] font-semibold my-5">
              Contact Information
            </h6>
            <Grid item>
              <div className="flex flex-wrap w-full gap-3">
                <div style={{ display: "block" }} className="">
                  <label htmlFor="">Email Address *</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
                  />
                </div>
                <div style={{ display: "block" }}>
                  <label htmlFor="">Phone Number *</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full my-3 gap-3">
                <div style={{ display: "block" }} className="">
                  <label htmlFor="">Address *</label>
                  <input
                    type="email"
                    placeholder="Address"
                    className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
                  />
                </div>
                <div style={{ display: "block" }}>
                  <label htmlFor="">Parent Address *</label>
                  <input
                    type="text"
                    placeholder="Parent Address"
                    className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
                  />
                </div>
                <div className="flex my-3 gap-3 items-center justify-center flex-wrap">
                  <Avatar style={{ width: "150px", height: "150px" }}></Avatar>
                  <div>
                    <p>Upload Student's photo (150px X 150px)</p>
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      id="image-input"
                      multiple
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  className="w-[532px] h-[52px]"
                  style={{
                    background: "#186318",
                    textTransform: "inherit",
                    padding: "8px",
                    borderRadius: "8px",
                  }}
                  variant="contained"
                >
                  Complete
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default StudentsContinued;
