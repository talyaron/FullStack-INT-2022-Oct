var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function game(replay) {
    if (replay === void 0) { replay = false; }
    return __awaiter(this, void 0, void 0, function () {
        function sound(src) {
            this.sound = document.createElement("audio");
            this.sound.src = src;
            this.sound.setAttribute("preload", "auto");
            this.sound.setAttribute("controls", "block");
            this.sound.setAttribute("loop", "true");
            this.sound.style.display = "block";
            document.body.appendChild(this.sound);
            this.play = function () {
                this.sound.play();
            };
            this.stop = function () {
                this.sound.pause();
            };
        }
        // Create enemies with X coordinats offset
        function spawnEnemies(enemyCount) {
            var enemyImages = [
                "../../images/enemies/Evil-Angel_1_90x90.png",
                "../../images/enemies/Evil-Angel_2_90x90.png",
                "../../images/enemies/golem_1_90x90.png",
                "../../images/enemies/golem_2_90x90.png",
            ];
            for (var i = 1; i < enemyCount + 1; i++) {
                var xOffset = i * Math.floor(Math.random() * (300 - 100 + 1) + 100) +
                    newTileSize_1 * 2;
                enemiesArray_1.push(new Enemey_1({ x: path[0].x - xOffset, y: path[0].y }, enemyImages));
            }
        }
        function drawHearts(playerHealth) {
            playerHealthHearts_1.innerHTML = "";
            for (var i = 1; i <= playerHealth; i++) {
                if (i <= playerHealth) {
                    playerHealthHearts_1.insertAdjacentHTML("beforeend", '<img src="../images/icons/Full Heart 12x12.png">');
                }
                else {
                    playerHealthHearts_1.insertAdjacentHTML("beforeend", '<img src="../images/icons/Empty Heart 12x12.png">');
                }
            }
        }
        // Animation function (Recursion)
        function animate() {
            var animationFrame = requestAnimationFrame(animate);
            if (gamePaused_1) {
                cancelAnimationFrame(animationFrame);
            }
            if (!canvas_1)
                throw new Error("[Canvas] Game Error");
            if (!ctx_1)
                throw new Error("[Canvas-ctx] Game Error");
            ctx_1.clearRect(0, 0, canvas_1.width, canvas_1.height);
            // ctx.drawImage(mapImage, 0, 0);
            if (waveCount_1 === 20) {
                console.log("Congratulations!");
                gameOver_1.innerText = "Congratulations! You saved the village!";
                gameOver_1.style.fontSize = "30px";
                gameOver_1.style.display = "flex";
                uiIconsContainer_1.style.display = "none";
                replayBtn_1.style.display = "flex";
                cancelAnimationFrame(animationFrame);
                scoreboardBtnContainer_1.style.display = "flex";
                towersOptionsContainer_1.style.display = "none";
                var updateHighscore = fetch("/api/game/increase-highscore", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ score: score_1 })
                });
            }
            for (var i = enemiesArray_1.length - 1; i >= 0; i--) {
                var enemy = enemiesArray_1[i];
                enemy.update();
                if (enemy.position.x * mapZoom_1 > canvas_1.width) {
                    playerHealth_1 -= 1;
                    drawHearts(playerHealth_1);
                    enemiesArray_1.splice(i, 1);
                    if (playerHealth_1 === 0) {
                        console.log("Game Over");
                        gameOver_1.style.display = "flex";
                        uiIconsContainer_1.innerHTML = "";
                        replayBtn_1.style.display = "flex";
                        scoreboardBtnContainer_1.style.display = "flex";
                        towersOptionsContainer_1.style.display = "none";
                        cancelAnimationFrame(animationFrame);
                        var updateHighscore = fetch("/api/game/increase-highscore", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ score: score_1 })
                        });
                    }
                }
                if (enemiesArray_1.length === 0) {
                    spawnEnemies(enemyCount_1);
                }
            }
            placementTowersArray_1.forEach(function (tower) {
                tower.update(mousePos_1);
            });
            towersArray_1.forEach(function (tower) {
                tower.update();
                tower.target = null;
                var validEnemies = enemiesArray_1.filter(function (enemy) {
                    var xDistance = enemy.center.x - tower.center.x / mapZoom_1;
                    var yDistance = enemy.center.y - tower.center.y / mapZoom_1;
                    var distance = Math.floor(Math.hypot(xDistance, yDistance));
                    return distance < enemy.radius + tower.radius / mapZoom_1;
                });
                tower.target = validEnemies[0];
                var _loop_2 = function (i) {
                    var bullet = tower.bullets[i];
                    bullet.update();
                    if (bullet.bulletLife <= 0) {
                        tower.bullets.splice(i, 1);
                    }
                    var xDistance = bullet.enemy.center.x - bullet.center.x / mapZoom_1;
                    var yDistance = bullet.enemy.center.y - bullet.center.y / mapZoom_1;
                    var distance = Math.floor(Math.hypot(xDistance, yDistance));
                    if (distance <
                        bullet.enemy.radius / mapZoom_1 + bullet.radius) {
                        bullet.enemy.health -= bullet.damage;
                        if (bullet.enemy.health <= 0) {
                            var enemyIndex = enemiesArray_1.findIndex(function (enemy) {
                                return bullet.enemy === enemy;
                            });
                            if (enemyIndex > -1) {
                                score_1 += 10;
                                coins_1 += Math.floor(Math.random() * (16 - 10 + 1 + 10));
                                playerCoins_1.innerText = coins_1;
                                scoreAmount_1.innerText = score_1;
                                enemiesArray_1.splice(enemyIndex, 1);
                            }
                        }
                        if (enemiesArray_1.length === 0) {
                            enemyCount_1 += 2;
                            waveCount_1 += 1;
                            if (enemySpeed_1 > 1) {
                                enemySpeed_1 -= 0.1;
                            }
                            waveNumber_1.innerText = waveCount_1;
                            if (bulletPower_1 - waveCount_1 > 2) {
                                bulletPower_1 -= waveCount_1;
                            }
                            spawnEnemies(enemyCount_1);
                        }
                        tower.bullets.splice(i, 1);
                    }
                };
                for (var i = tower.bullets.length - 1; i >= 0; i--) {
                    _loop_2(i);
                }
            });
        }
        function gameMenuPause() {
            if (!gamePaused_1) {
                gameOver_1.innerText = "";
                gameOver_1.style.display = "flex";
                menuContainer_1.style.display = "flex";
                towersOptionsContainer_1.style.display = "none";
                pauseBtnIcon_1.setAttribute("src", "../images/icons/play 96x96.png");
                gamePaused_1 = true;
            }
            else {
                gameOver_1.style.display = "none";
                menuContainer_1.style.display = "none";
                gameOver_1.innerText = "GAME OVER";
                towersOptionsContainer_1.style.display = "flex";
                pauseBtnIcon_1.setAttribute("src", "../images/icons/pause 96x96.png");
                gamePaused_1 = false;
                animate();
            }
        }
        function deleteBackgroungFromTower(towersDivs, currentSelectedTower) {
            for (var i = 0; i < towersDivs.length; i++) {
                var tower = towersDivs[i];
                if (i != currentSelectedTower) {
                    tower.style.backgroundColor = "";
                }
            }
        }
        var newGame, maps_1_5, maps_1, mainContainer_1, towersOptionsContainer_1, towersDiv, gameOver_1, scene, playBtnContainer, replayBtn_1, playerHealthHearts_1, uiIconsContainer_1, playerScore, playerCoinsBag, playerCoins_1, scoreAmount_1, wave, waveNumber_1, resolution_1, scoreboardBtnContainer_1, menuContainer_1, menuDetails, submitBtnContainer, submitBtn, submitBtnH1, htmlBody, pauseBtnIcon_1, pauseBtnContainer, menuBtnContainer, activePlacement_1, scale_1, towerScale_1, choosenTower_1, getTowersDB, towersDB_1, mapZoomDB, userResolution, mapZoom_1, towersHtml, heightMultiplayer_1, enemyCount_1, playerHealth_1, bulletPower_1, gamePaused_1, score_1, getCoinsDB, coins_1, getWaveCountDB, waveCount_1, zoomOffsetX_1, zoomOffsetY_1, towerCost_1, towerRadius_1, tileSize_1, newTileSize_1, enemySpeed_1, bulletSpeed_1, mousePos_1, enemiesArray_1, placementTowers2d, placementTowersArray_1, towersArray_1, canvas_1, ctx_1, mapImage, currentMap, currentMap, bgImage_1, i, Sprite, PlacementTower_1, Enemey_1, Tower_1, Bullet_1, i, towersDivs_1, _loop_1, i, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 10, , 11]);
                    return [4 /*yield*/, fetch("/api/game/create-game")];
                case 1:
                    newGame = _a.sent();
                    if (!newGame.ok)
                        throw new Error("Game Error");
                    maps_1_5 = ['Road-Of-Glory-peaceful-Map_1260x720x1.5.png', 'Road-Of-Glory-ruined-Map_1260x720x1.5.png'];
                    maps_1 = ['Road-Of-Glory-peaceful-Map_840x480x1.png', 'Road-Of-Glory-ruined-Map_840x480x1.png'];
                    mainContainer_1 = document.querySelector(".mainContainer");
                    towersOptionsContainer_1 = document.querySelector(".towersOptionsContainer");
                    towersDiv = document.querySelector(".towers");
                    gameOver_1 = document.querySelector("#gameOver");
                    scene = document.querySelector("#scene");
                    playBtnContainer = document.querySelector(".playBtnContainer");
                    replayBtn_1 = document.querySelector("#replayBtn");
                    playerHealthHearts_1 = document.querySelector("#playerHealth");
                    uiIconsContainer_1 = document.querySelector(".uiIconsContainer");
                    playerScore = document.querySelector("#playerScore");
                    playerCoinsBag = document.querySelector("#playerCoinsBag");
                    playerCoins_1 = document.querySelector("#playerCoins");
                    scoreAmount_1 = document.querySelector("#scoreAmount");
                    wave = document.querySelector("#wave");
                    waveNumber_1 = document.querySelector("#waveNumber");
                    resolution_1 = document.querySelector("#resolution");
                    scoreboardBtnContainer_1 = document.querySelector(".scoreboardBtnContainer");
                    menuContainer_1 = document.querySelector(".menuContainer");
                    menuDetails = document.querySelector(".menuDetails");
                    submitBtnContainer = document.querySelector(".submitBtnContainer");
                    submitBtn = document.querySelector("#submitBtn");
                    submitBtnH1 = document.querySelector("#submitBtnH1");
                    htmlBody = document.querySelector("body");
                    if (scene) {
                        scene.remove();
                    }
                    replayBtn_1.style.display = "none";
                    menuContainer_1.style.display = "none";
                    uiIconsContainer_1.innerHTML = "<div id=\"pauseBtnContainer\" class=\"navIcon uiIcons\">\n                <img id=\"pauseBtnIcon\" class=\"icon\" src=\"../images/icons/pause 96x96.png\">\n                <img id=\"pauseBtn\" src=\"../images/buttons/20.png\">\n            </div>\n            <div id=\"menuBtnContainer\" class=\"navIcon uiIcons\">\n                <img id=\"menuBtnIcon\" class=\"icon\" src=\"../images/icons/menu 96x96.png\">\n                <img id=\"menuBtn\" src=\"../images/buttons/20.png\">\n            </div>";
                    pauseBtnIcon_1 = document.querySelector("#pauseBtnIcon");
                    pauseBtnContainer = document.querySelector("#pauseBtnContainer");
                    menuBtnContainer = document.querySelector("#menuBtnContainer");
                    activePlacement_1 = undefined;
                    scale_1 = 1;
                    towerScale_1 = 1;
                    choosenTower_1 = undefined;
                    return [4 /*yield*/, fetch("/api/game/get-towers")];
                case 2:
                    getTowersDB = _a.sent();
                    return [4 /*yield*/, getTowersDB.json()];
                case 3:
                    towersDB_1 = (_a.sent()).towersDB;
                    return [4 /*yield*/, fetch("/api/users/get-user-resolution")];
                case 4:
                    mapZoomDB = _a.sent();
                    return [4 /*yield*/, mapZoomDB.json()];
                case 5:
                    userResolution = (_a.sent()).userResolution;
                    mapZoom_1 = userResolution;
                    towersHtml = "";
                    heightMultiplayer_1 = 1;
                    enemyCount_1 = 4;
                    playerHealth_1 = 5;
                    bulletPower_1 = 20;
                    gamePaused_1 = false;
                    score_1 = 0;
                    return [4 /*yield*/, fetch("/api/game/get-game-coins")];
                case 6:
                    getCoinsDB = _a.sent();
                    return [4 /*yield*/, getCoinsDB.json()];
                case 7:
                    coins_1 = (_a.sent()).coins;
                    return [4 /*yield*/, fetch("/api/game/get-game-wave-count")];
                case 8:
                    getWaveCountDB = _a.sent();
                    return [4 /*yield*/, getWaveCountDB.json()];
                case 9:
                    waveCount_1 = (_a.sent()).waveCount;
                    zoomOffsetX_1 = 0;
                    zoomOffsetY_1 = 0;
                    towerCost_1 = undefined;
                    towerRadius_1 = 70;
                    scoreAmount_1.innerText = score_1;
                    playerCoins_1.innerText = coins_1;
                    waveNumber_1.innerText = waveCount_1;
                    tileSize_1 = 12;
                    newTileSize_1 = mapZoom_1 * tileSize_1;
                    enemySpeed_1 = 2;
                    bulletSpeed_1 = 2;
                    mousePos_1 = { x: undefined, y: undefined };
                    enemiesArray_1 = [];
                    placementTowers2d = [];
                    placementTowersArray_1 = [];
                    towersArray_1 = [];
                    canvas_1 = document.querySelector("canvas");
                    if (!canvas_1)
                        throw new Error("[Canvas] Game Error");
                    ctx_1 = canvas_1.getContext("2d");
                    if (!ctx_1)
                        throw new Error("[Canvas-ctx] Game Error");
                    // Canvas fill is optional if using a background image
                    ctx_1.fillStyle = "white";
                    // If using a background image this fill is optional
                    ctx_1.fillRect(0, 0, canvas_1.width, canvas_1.height);
                    mapImage = new Image();
                    // Set the canvas Width and Height
                    if (mapZoom_1 === 1) {
                        currentMap = maps_1[0];
                        if (replay) {
                            currentMap = maps_1[1];
                        }
                        menuContainer_1.style.width = "208px";
                        menuContainer_1.style.height = "320px";
                        menuDetails.style.width = "137px";
                        menuDetails.style.height = "250px";
                        submitBtn.style.width = "75px";
                        submitBtn.style.height = "31.5px";
                        submitBtnH1.style.fontSize = "12px";
                        scale_1 = 0.65;
                        towerScale_1 = 0.5;
                        zoomOffsetX_1 = newTileSize_1;
                        zoomOffsetY_1 = newTileSize_1;
                        heightMultiplayer_1 = 5;
                        canvas_1.width = 840;
                        canvas_1.height = 480;
                        mapImage.src =
                            "../../images/maps/" + currentMap;
                        mainContainer_1.insertAdjacentHTML("beforeend", "<img id=\"bgImage\" src=\"../../images/maps/" + currentMap + "\">");
                    }
                    else if (mapZoom_1 === 1.5) {
                        currentMap = maps_1_5[0];
                        if (replay) {
                            currentMap = maps_1_5[1];
                        }
                        menuContainer_1.style.width = "416px";
                        menuContainer_1.style.height = "640px";
                        menuDetails.style.width = "274px";
                        menuDetails.style.height = "500px";
                        submitBtnH1.style.fontSize = "24px";
                        scale_1 = 1;
                        towerScale_1 = 1;
                        zoomOffsetX_1 = newTileSize_1;
                        zoomOffsetY_1 = newTileSize_1 * 2;
                        heightMultiplayer_1 = 1.5;
                        canvas_1.width = 1260;
                        canvas_1.height = 720;
                        mapImage.src =
                            "../../images/maps/" + currentMap;
                        mainContainer_1.insertAdjacentHTML("beforeend", "<img id=\"bgImage\" src=\"../../images/maps/" + currentMap + "\">");
                    }
                    else if (mapZoom_1 === 2) {
                        scale_1 = 1;
                        towerScale_1 = 1.75;
                        zoomOffsetY_1 = newTileSize_1;
                        heightMultiplayer_1 = 1.5;
                        canvas_1.width = 1680;
                        canvas_1.height = 960;
                        mapImage.src =
                            "../../images/maps/Road-Of-Glory-peaceful-Map_1680x960x2.0.png";
                        mainContainer_1.insertAdjacentHTML("beforeend", '<img id="bgImage" src="../../images/maps/Road-Of-Glory-peaceful-Map_1680x960x2.0.png">');
                    }
                    else {
                        throw new Error("Resolution Error!");
                    }
                    bgImage_1 = document.querySelector("#bgImage");
                    wave.style.display = "flex";
                    gameOver_1.style.display = "none";
                    playBtnContainer.style.display = "none";
                    playerHealthHearts_1.style.display = "flex";
                    uiIconsContainer_1.style.display = "flex";
                    playerScore.style.display = "flex";
                    playerCoinsBag.style.display = "flex";
                    towersOptionsContainer_1.style.display = "flex";
                    scoreboardBtnContainer_1.style.display = "none";
                    // Convert Towers coordinats to 2d
                    for (i = 0; i < placementTowers.length; i += 70) {
                        placementTowers2d.push(placementTowers.slice(i, i + 70));
                    }
                    Sprite = /** @class */ (function () {
                        function Sprite(_a, imgSource, imgFrames) {
                            var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c;
                            if (imgFrames === void 0) { imgFrames = 1; }
                            this.randomEnemyIndex = Math.floor(Math.random() * (imgSource.length - 1 + 1) + 1);
                            this.position = { x: x, y: y };
                            this.image = new Image();
                            this.image.src = imgSource[this.randomEnemyIndex - 1];
                            // this.width = 90;
                            // this.height = 90;
                            this.zoom = scale_1;
                            this.imgFrames = imgFrames;
                            this.currentFrame = 0;
                            this.framesTimeout = 0;
                            this.center = {
                                x: this.position.x * this.zoom - newTileSize_1 / mapZoom_1,
                                y: this.position.y * this.zoom - newTileSize_1 / mapZoom_1
                            };
                        }
                        Sprite.prototype.draw = function () {
                            var cropWidth = this.image.width / this.imgFrames;
                            var crop = {
                                position: { x: cropWidth * this.currentFrame, y: 0 },
                                width: cropWidth,
                                height: this.image.height
                            };
                            ctx_1 === null || ctx_1 === void 0 ? void 0 : ctx_1.drawImage(this.image, crop.position.x, crop.position.y, crop.width, crop.height, this.position.x * this.zoom -
                                newTileSize_1 +
                                mapZoom_1 * this.zoom -
                                zoomOffsetX_1, this.position.y * this.zoom -
                                newTileSize_1 +
                                mapZoom_1 * this.zoom -
                                zoomOffsetY_1, crop.width * scale_1, crop.height * scale_1);
                            this.framesTimeout++;
                            if (this.framesTimeout % 9 === 0) {
                                this.currentFrame++;
                                if (this.currentFrame >= this.imgFrames) {
                                    this.currentFrame = 0;
                                }
                            }
                        };
                        return Sprite;
                    }());
                    PlacementTower_1 = /** @class */ (function () {
                        function PlacementTower(_a) {
                            var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c;
                            this.position = { x: x, y: y };
                            this.size = newTileSize_1;
                            this.color = "rgba(128,0,128,0.2)";
                            this.used = false;
                            this.radius = towerRadius_1 * mapZoom_1;
                            this.width = newTileSize_1;
                            this.height = newTileSize_1;
                            this.center = {
                                x: this.position.x + this.width,
                                y: this.position.y + this.height / 2
                            };
                        }
                        PlacementTower.prototype.draw = function () {
                            if (!ctx_1)
                                throw new Error("[Canvas-ctx] Game Error");
                            ctx_1.fillStyle = this.color;
                            ctx_1.fillRect(this.position.x, this.position.y, this.size * 2, this.size);
                        };
                        PlacementTower.prototype.update = function (mousePos) {
                            this.draw();
                            if (!this.used && mousePos.x > this.position.x &&
                                mousePos.x < this.position.x + this.size * 2 &&
                                mousePos.y > this.position.y &&
                                mousePos.y < this.position.y + this.size) {
                                if (!ctx_1)
                                    throw new Error("[Canvas-ctx] Game Error");
                                ctx_1.beginPath();
                                ctx_1.fillStyle = "rgba(255,255,255,0.2)";
                                ctx_1.fill();
                                this.color = "#4faf7ca9";
                            }
                            else {
                                this.color = "rgba(128,0,128,0.0)";
                            }
                        };
                        return PlacementTower;
                    }());
                    Enemey_1 = /** @class */ (function (_super) {
                        __extends(Enemey, _super);
                        function Enemey(_a, enemyImages) {
                            var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c;
                            var _this = _super.call(this, { x: 0, y: 0 }, enemyImages, 12) || this;
                            _this.position = { x: x, y: y };
                            _this.width = newTileSize_1;
                            _this.height = newTileSize_1;
                            _this.waypointIndex = 0;
                            _this.zoom = mapZoom_1;
                            _this.radius = newTileSize_1;
                            _this.health = 100;
                            _this.center = {
                                x: _this.position.x + _this.width / 2,
                                y: _this.position.y + _this.height / 2
                            };
                            return _this;
                        }
                        Enemey.prototype.draw = function () {
                            if (!ctx_1)
                                throw new Error("[Canvas-ctx] Game Error");
                            _super.prototype.draw.call(this);
                            // Enemy Health Bar
                            ctx_1.fillStyle = "red";
                            ctx_1.fillRect(this.position.x * this.zoom, this.position.y * this.zoom -
                                newTileSize_1 / mapZoom_1 -
                                zoomOffsetY_1, this.width * mapZoom_1, tileSize_1 / 2);
                            ctx_1.fillStyle = "green";
                            ctx_1.fillRect(this.position.x * this.zoom, this.position.y * this.zoom -
                                newTileSize_1 / mapZoom_1 -
                                zoomOffsetY_1, (this.width * mapZoom_1 * this.health) / 100, tileSize_1 / 2);
                        };
                        Enemey.prototype.update = function () {
                            this.draw();
                            var waypoint = path[this.waypointIndex];
                            var yWaypoint = waypoint.y - this.center.y;
                            var xWaypoint = waypoint.x - this.center.x;
                            var angle = Math.atan2(yWaypoint, xWaypoint);
                            this.position.x += Math.cos(angle) / enemySpeed_1;
                            this.position.y += Math.sin(angle) / enemySpeed_1;
                            this.center = {
                                x: this.position.x + this.width / 2,
                                y: this.position.y + this.height / 2
                            };
                            if (Math.round(this.center.x) === Math.round(waypoint.x) &&
                                Math.round(this.center.y) === Math.round(waypoint.y) &&
                                this.waypointIndex < path.length - 1) {
                                this.waypointIndex++;
                            }
                        };
                        return Enemey;
                    }(Sprite));
                    Tower_1 = /** @class */ (function () {
                        function Tower(_a, image, radius, damage) {
                            var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c;
                            if (radius === void 0) { radius = 70; }
                            if (damage === void 0) { damage = 21; }
                            this.position = { x: x, y: y };
                            this.bullets = [];
                            this.radius = radius * mapZoom_1;
                            this.target;
                            this.frames = 0;
                            this.damage = damage;
                            this.zoom = mapZoom_1;
                            this.image = new Image();
                            this.image.src = image;
                            this.width = 64 / this.zoom * towerScale_1;
                            this.height = 106 / this.zoom * towerScale_1;
                            this.color = "rgba(128,0,128,0.2)";
                            this.center = {
                                x: this.position.x + this.width - zoomOffsetX_1,
                                y: this.position.y + this.height - zoomOffsetY_1 * heightMultiplayer_1
                            };
                        }
                        Tower.prototype.draw = function () {
                            if (!ctx_1)
                                throw new Error("[Canvas-ctx] Game Error");
                            ctx_1 === null || ctx_1 === void 0 ? void 0 : ctx_1.drawImage(this.image, this.position.x, this.position.y - tileSize_1 * 3, this.width, this.height);
                            // ctx.fillStyle = "green";
                            // ctx.fillRect(
                            //     this.position.x,
                            //     this.position.y,
                            //     this.width,
                            //     this.height
                            // );
                        };
                        Tower.prototype.update = function () {
                            this.draw();
                            this.frames++;
                            if (this.frames % 100 === 0 && this.target) {
                                this.bullets.push(new Bullet_1({ x: this.position.x, y: this.position.y }, this.target, this.damage));
                            }
                            if (mousePos_1.x > this.position.x &&
                                mousePos_1.x < this.position.x + this.width &&
                                mousePos_1.y > this.position.y - tileSize_1 * 3 &&
                                mousePos_1.y < this.position.y - tileSize_1 * 3 + this.height) {
                                if (!ctx_1)
                                    throw new Error("[Canvas-ctx] Game Error");
                                ctx_1.beginPath();
                                ctx_1.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
                                ctx_1.fillStyle = "rgba(255,255,255,0.2)";
                                ctx_1.fill();
                                this.color = "rgba(128,0,128,1)";
                            }
                            else {
                                this.color = "rgba(128,0,128,0.2)";
                            }
                        };
                        return Tower;
                    }());
                    Bullet_1 = /** @class */ (function () {
                        function Bullet(_a, enemy, damage) {
                            var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c;
                            if (damage === void 0) { damage = 21; }
                            this.position = { x: x, y: y };
                            this.velocity = { x: 0, y: 0 };
                            this.center = {
                                x: this.position.x + newTileSize_1,
                                y: this.position.y + newTileSize_1 / 2
                            };
                            this.radius = 4 * mapZoom_1;
                            this.enemy = enemy;
                            this.bulletLife = 300;
                            this.damage = damage;
                            if (waveCount_1 < 18) {
                                this.damage = this.damage - waveCount_1;
                            }
                            this.image = new Image();
                            this.image.src = "";
                        }
                        Bullet.prototype.draw = function () {
                            if (!ctx_1)
                                throw new Error("[Canvas-ctx] Game Error");
                            ctx_1.beginPath();
                            ctx_1.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
                            ctx_1.fillStyle = "white";
                            ctx_1.fill();
                        };
                        Bullet.prototype.update = function () {
                            this.draw();
                            var angle = Math.atan2(this.enemy.center.y - this.position.y / mapZoom_1, this.enemy.center.x - this.position.x / mapZoom_1);
                            this.velocity.x = Math.cos(angle) * bulletSpeed_1;
                            this.velocity.y = Math.sin(angle) * bulletSpeed_1;
                            this.center.x += this.velocity.x;
                            this.center.y += this.velocity.y;
                            this.bulletLife--;
                        };
                        return Bullet;
                    }());
                    placementTowers2d.forEach(function (row, y) {
                        row.forEach(function (symbol, x) {
                            if (symbol === 1211) {
                                placementTowersArray_1.push(new PlacementTower_1({
                                    x: x * newTileSize_1,
                                    y: y * newTileSize_1
                                }));
                            }
                        });
                    });
                    drawHearts(playerHealth_1);
                    spawnEnemies(enemyCount_1);
                    // Monitor mouse event "move" to catch the coordinats and use it to find elements inside the canvas
                    for (i = 0; i < towersDB_1.length; i++) {
                        towersHtml += "<div id=\"tower" + i + "\" class=\"tower\">\n            <img src=\"" + towersDB_1[i].image + "\" > <div class=\"towerAttributes\"><p>Cost: " + towersDB_1[i].cost + "</p><p>Damage: " + towersDB_1[i].damage + "</p><p>Radius: " + towersDB_1[i].radius + "</p></div>\n        </div>";
                    }
                    towersDiv.innerHTML = towersHtml;
                    towersDivs_1 = document.querySelectorAll(".tower");
                    _loop_1 = function (i) {
                        var tower = towersDivs_1[i];
                        tower === null || tower === void 0 ? void 0 : tower.addEventListener("click", function (event) {
                            choosenTower_1 = towersDB_1[i];
                            towerCost_1 = choosenTower_1.cost;
                            towerRadius_1 = choosenTower_1.radius;
                            tower.style.backgroundColor = "rgba(128, 128, 128, 0.639)";
                            deleteBackgroungFromTower(towersDivs_1, i);
                        });
                    };
                    for (i = 0; i < towersDivs_1.length; i++) {
                        _loop_1(i);
                    }
                    pauseBtnContainer.addEventListener("click", function (event) {
                        if (!gamePaused_1) {
                            gameOver_1.innerText = "Paused!";
                            gameOver_1.style.display = "flex";
                            towersOptionsContainer_1.style.display = "none";
                            pauseBtnIcon_1.setAttribute("src", "../images/icons/play 96x96.png");
                            gamePaused_1 = true;
                        }
                        else {
                            gameOver_1.innerText = "GAME OVER";
                            gameOver_1.style.display = "none";
                            menuContainer_1.style.display = "none";
                            towersOptionsContainer_1.style.display = "flex";
                            pauseBtnIcon_1.setAttribute("src", "../images/icons/pause 96x96.png");
                            gamePaused_1 = false;
                            animate();
                        }
                    });
                    menuBtnContainer.addEventListener("click", function (event) {
                        gameMenuPause();
                    });
                    submitBtnContainer.addEventListener("click", function (event) { return __awaiter(_this, void 0, void 0, function () {
                        var userNewResolution;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(mapZoom_1 != parseFloat(resolution_1.value))) return [3 /*break*/, 2];
                                    bgImage_1 === null || bgImage_1 === void 0 ? void 0 : bgImage_1.remove();
                                    return [4 /*yield*/, fetch("/api/users/set-user-resolution", {
                                            method: "POST",
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({ resolution: resolution_1.value })
                                        })];
                                case 1:
                                    userNewResolution = _a.sent();
                                    if (userNewResolution.ok === true) {
                                        location.reload();
                                    }
                                    return [3 /*break*/, 3];
                                case 2:
                                    gameMenuPause();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    canvas_1.addEventListener("click", function (event) {
                        if (activePlacement_1 && !activePlacement_1.used && towerCost_1 && coins_1 >= towerCost_1 && choosenTower_1 != undefined) {
                            // choosenTower = towersDB[0]
                            coins_1 -= choosenTower_1.cost;
                            playerCoins_1.innerText = coins_1;
                            towersArray_1.push(new Tower_1({
                                x: activePlacement_1.position.x,
                                y: activePlacement_1.position.y
                            }, choosenTower_1.image, choosenTower_1.radius, choosenTower_1.damage));
                            activePlacement_1.used = true;
                        }
                    });
                    window.addEventListener("mousemove", function (event) {
                        mousePos_1.x = event.clientX - mainContainer_1.offsetLeft;
                        mousePos_1.y = event.clientY - mainContainer_1.offsetTop;
                        activePlacement_1 = null;
                        for (var i = 0; i < placementTowersArray_1.length; i++) {
                            var placement = placementTowersArray_1[i];
                            if (mousePos_1.x > placement.position.x &&
                                mousePos_1.x < placement.position.x + placement.size * 2 &&
                                mousePos_1.y > placement.position.y &&
                                mousePos_1.y < placement.position.y + placement.size) {
                                activePlacement_1 = placement;
                                break;
                            }
                        }
                    });
                    animate();
                    return [3 /*break*/, 11];
                case 10:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
