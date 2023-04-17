import express from "express";
import mongoose, {Schema} from "mongoose";

interface User {
  
    name: string;
    password: string | number;
  }

  