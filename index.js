"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var git_get_repos_id_1 = require("git-get-repos-id");
var git_get_repos_labels_1 = require("git-get-repos-labels");
var git_del_repos_labels_1 = require("git-del-repos-labels");
var git_create_repos_labels_1 = require("git-create-repos-labels");
var git_update_repos_labels_1 = require("git-update-repos-labels");
var gitCopyReposLabels = function (_a) {
    var from = _a.from, to = _a.to, token = _a.token, _b = _a.strategy, strategy = _b === void 0 ? 'post' : _b;
    return __awaiter(void 0, void 0, void 0, function () {
        var labelsFrom, labelsTo, repoId;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, git_get_repos_labels_1["default"]({ owner: from.owner, repo: from.repo, token: token })];
                case 1:
                    labelsFrom = _c.sent();
                    return [4 /*yield*/, git_get_repos_labels_1["default"]({ owner: to.owner, repo: to.repo, token: token })];
                case 2:
                    labelsTo = _c.sent();
                    return [4 /*yield*/, git_get_repos_id_1["default"]({ owner: to.owner, repo: to.repo, token: token })];
                case 3:
                    repoId = _c.sent();
                    if (strategy === 'post') {
                        return [2 /*return*/, Promise.all(labelsTo.map(function (label) { return git_del_repos_labels_1["default"]({
                                label: label,
                                token: token
                            }); })).then(function () { return labelsFrom.map(function (label) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, git_create_repos_labels_1["default"]({ label: label, repoId: repoId, token: token })];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }); })];
                    }
                    return [2 /*return*/, labelsFrom.map(function (label) {
                            var labelTo = labelsTo.find(function (_a) {
                                var name = _a.name;
                                return label.name.includes(name);
                            });
                            return labelTo
                                ? git_update_repos_labels_1["default"]({ label: Object.assign(label, { id: labelTo.id }), token: token })
                                : git_create_repos_labels_1["default"]({ label: label, repoId: repoId, token: token });
                        })];
            }
        });
    });
};
exports["default"] = gitCopyReposLabels;
module.exports = gitCopyReposLabels;
module.exports["default"] = gitCopyReposLabels;
