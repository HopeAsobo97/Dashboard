import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Props from "../props/Props";

const Students = () => {
  return (
    <Box className="m-5 overflow-hidden scroll-m-1 w-[91.5%]">
      <Grid>
        <Grid item>
          <Props header="Students" />
          <div
            className="bg-[#D60A0B] mb-3"
            style={{ width: "35px", height: "2px" }}
          ></div>
        </Grid>
        <Box className="m-5 p-5 rounded bg-white">
          <h6 className=" font-semibold">Add Student</h6>
          <Grid className="flex gap-2 my-5">
            <Button
              variant="outlined"
              style={{
                border: "1px solid #186318",
                textTransform: "Inherit",
                color: "#186318",
              }}
            >
              Manually
            </Button>
            <Button
              variant="contained"
              style={{ background: "#186318", textTransform: "inherit" }}
            >
              Import CSV
            </Button>
          </Grid>
          <h6 className="text-[#186318] font-semibold my-5">
            Basic Information
          </h6>
          <div className="flex flex-wrap w-full gap-3">
            <div style={{ display: "block" }} className="">
              <label htmlFor="">First Name *</label>
              <input
                type="text"
                placeholder="Please First Name"
                className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
              />
            </div>
            <div style={{ display: "block" }}>
              <label htmlFor="">Last Name *</label>
              <input
                type="text"
                placeholder="Please Last Name"
                className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 my-3">
            <div style={{ display: "block" }}>
              <label htmlFor="">Gender *</label>
              <select
                name=""
                id=""
                className="w-[26rem] text-[14px] block h-10 border border-slate-400 rounded outline-none"
              >
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Date of Birth *</label>
              <input
                type="date"
                name=""
                id=""
                className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-3">
            <div style={{ display: "block" }} className="">
              <label htmlFor="">Place of Birth *</label>
              <input
                type="text"
                placeholder="Place of Birth"
                className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
              />
            </div>
            <div style={{ display: "block" }} className="">
              <label htmlFor="">Region of Origin *</label>
              <input
                type="text"
                placeholder="Region of Origin"
                className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full my-3 gap-3">
            <div style={{ display: "block" }}>
              <label htmlFor="">Marital Status *</label>
              <select
                name=""
                id=""
                className="w-[26rem] text-[14px] block h-10 border border-slate-400 rounded outline-none"
              >
                <option value="">Married</option>
                <option value="">Single</option>
              </select>
            </div>
            <div style={{ display: "block" }} className="">
              <label htmlFor="">Matricule *</label>
              <input
                type="text"
                placeholder="Matricule"
                className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-3">
            <div style={{ display: "block" }} className="">
              <label htmlFor="">Program *</label>
              <select
                name=""
                id=""
                className="w-[26rem] text-[14px] block h-10 border border-slate-400 rounded outline-none"
              >
                <option value="">Select Program</option>
                <option value="">HND Nursing</option>
              </select>
            </div>
            <div style={{ display: "block" }} className="">
              <label htmlFor="">Date of Admission *</label>
              <input
                type="date"
                className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full my-3 gap-3">
            <div style={{ display: "block" }} className="">
              <label htmlFor="">Nationality *</label>
              <input
                placeholder="Nationality"
                type="text"
                className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
              />
            </div>
            <div style={{ display: "block" }} className="">
              <label htmlFor="">NID Number *</label>
              <input
                placeholder="NID Number"
                type="text"
                className="w-[26rem] text-[14px] block h-10 p-2 text-slate-400 border-slate-400 border outline-none rounded"
              />
            </div>
          </div>
          <Grid className="flex justify-center items-center pt-3">
              <Button className="w-[532px] h-[52px]" style={{"background":"#186318","textTransform":"inherit","padding":"8px","borderRadius":"8px"}} variant="contained">Next</Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Students;
