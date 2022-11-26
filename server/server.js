"use strict";
// const {Deso} = require("deso.js")
// const express = require('express')
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dist_1 = require("deso.js/dist");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const deso = new dist_1.Deso({});
const USER_PUBLIC_KEY = "BC1YLhp9Zf6Yykr7V14zxqeoLS1AbsvExpkgMdVVuT3TDniEhD8htJ1";
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(express_1.default.json());
app.post(`/api/profile`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const pkey = req.body.pkey;
    if (!pkey)
        res.status(400).json({ message: "include pee key" });
    let profile = '';
    try {
        profile = yield deso.getSingleProfile({
            publicKey: pkey,
        });
    }
    catch (err) {
        return res.status(500).json({ message: err });
    }
    console.log("AAAAAAAAAAAAA", profile);
    res.status(200).json(profile);
}));
app.listen(5000, () => {
    console.log(`Server is running on port: 5000`);
});
