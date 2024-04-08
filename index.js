"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
if (process.env.NODE_ENV === "development") {
    dotenv_1.default.config();
}
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
app.set('view engine', 'ejs');
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public")); //serve static files from your static folder
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
