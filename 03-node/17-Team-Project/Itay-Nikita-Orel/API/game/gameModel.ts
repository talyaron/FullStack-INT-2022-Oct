import mongoose, { Schema } from "mongoose";
import { TowerSchema, Tower } from "../towers/towerModel";
import { EnemySchema, Enemy } from "../enemy/enemyModel";
import { UserSchema, User } from "../users/userModel";

export interface Game {
    player: User;
    score: number;
    coins: number;
    waveCount: number;
    enemies: Enemy[];
    towers: Tower[];
}


const GameSchema = new Schema<Game>({
    score: {
        type: Number,
        required: true
    },
    waveCount: {
        type: Number,
        required: true
    },
    coins: {
        type: Number,
        required: true
    },
    player: {type:Schema.Types.ObjectId ,required: true, ref:"users"},
    towers: [{type:Schema.Types.ObjectId ,required: true, ref:"towers"}],
    enemies: [{type:Schema.Types.ObjectId ,required: true, ref:"enemies"}],
});

const GameModel = mongoose.model("game" , GameSchema)

export default GameModel


// class PlacementTower {
//     position: { x: number; y: number };
//     size: number;

//     color: string;
//     used: boolean;
//     radius: number;
//     center: { x: number; y: number; };
//     width: number;
//     height: number;

//     constructor({ x = 0, y = 0 }) {
//         this.position = { x: x, y: y };
//         this.size = newTileSize;
//         this.color = "rgba(128,0,128,0.2)";
//         this.used = false;
//         this.radius = 70 * mapZoom;
//         this.width = newTileSize;
//         this.height = newTileSize;

//         this.center = {x: this.position.x + this.width , y: this.position.y + this.height/2}
//     }

//     draw() {
//         if (!ctx) throw new Error("[Canvas-ctx] Game Error");

//         ctx.fillStyle = this.color;
//         ctx.fillRect(
//             this.position.x,
//             this.position.y,
//             this.size,
//             this.size
//         );
//     }

//     update(mousePos) {
//         this.draw();
//         if (
//             mousePos.x > this.position.x &&
//             mousePos.x < this.position.x + this.size &&
//             mousePos.y > this.position.y &&
//             mousePos.y < this.position.y + this.size
//         ) {
//             if (!ctx) throw new Error("[Canvas-ctx] Game Error");
//             ctx.beginPath();
//             ctx.arc(
//                 this.center.x,
//                 this.center.y,
//                 this.radius,
//                 0,
//                 Math.PI * 2
//             );
//             ctx.fillStyle = "rgba(255,255,255,0.2)";
//             ctx.fill();
//             this.color = "rgba(128,0,128,1)";
//         } else {
//             this.color = "rgba(128,0,128,0.2)";
//         }
//     }
// }

// class Enemey {
//     position: { x: number; y: number };
//     width: number;
//     height: number;
//     waypointIndex: number;
//     zoom: number;
//     center: { x: number; y: number };
//     radius: number;
//     health: number;

//     constructor({ x = 0, y = 0 }) {
//         this.position = { x: x, y: y };
//         this.width = newTileSize;
//         this.height = newTileSize;
//         this.waypointIndex = 0;
//         this.zoom = mapZoom;
//         this.radius = newTileSize;
//         this.health = 100;
//         this.center = {
//             x: this.position.x + this.width / 2,
//             y: this.position.y + this.height / 2,
//         };
//     }

//     draw() {
//         if (!ctx) throw new Error("[Canvas-ctx] Game Error");
//         ctx.fillStyle = "purple";
//         ctx.beginPath();
//         ctx.arc(
//             this.center.x * this.zoom,
//             this.center.y * this.zoom,
//             this.radius,
//             0,
//             Math.PI * 2
//         );
//         ctx.fill();

//         // Enemy Health Bar
//         ctx.fillStyle = "red";
//         ctx.fillRect(
//             this.position.x * this.zoom,
//             this.position.y * this.zoom - newTileSize / mapZoom,
//             this.width * mapZoom,
//             tileSize / 2
//         );
//         ctx.fillStyle = "green";
//         ctx.fillRect(
//             this.position.x * this.zoom,
//             this.position.y * this.zoom - newTileSize / mapZoom,
//             (this.width * mapZoom * this.health) / 100,
//             tileSize / 2
//         );
//     }

//     update() {
//         this.draw();
//         const waypoint = path[this.waypointIndex];

//         const yWaypoint = waypoint.y - this.center.y;
//         const xWaypoint = waypoint.x - this.center.x;
//         const angle = Math.atan2(yWaypoint, xWaypoint);
//         this.position.x += Math.cos(angle) / enemySpeed;
//         this.position.y += Math.sin(angle) / enemySpeed;
//         this.center = {
//             x: this.position.x + this.width / 2,
//             y: this.position.y + this.height / 2,
//         };

//         if (
//             Math.round(this.center.x) === Math.round(waypoint.x) &&
//             Math.round(this.center.y) === Math.round(waypoint.y) &&
//             this.waypointIndex < path.length - 1
//         ) {
//             this.waypointIndex++;
//         }
//     }
// }

// // class Tower {
// //     position: { x: number; y: number };
// //     width: number;
// //     height: number;
// //     bullets: Bullet[];
// //     radius: number;
// //     center: { x: number; y: number };
// //     target: any;
// //     frames: number;

// //     constructor({ x = 0, y = 0 }) {
// //         this.position = { x: x, y: y };
// //         this.width = newTileSize * 2;
// //         this.height = newTileSize;
// //         this.bullets = [];
// //         this.center = {
// //             x: this.position.x + this.width / 2,
// //             y: this.position.y + this.height / 2,
// //         };
// //         this.radius = 70 * mapZoom;
// //         this.target;
// //         this.frames = 0;
// //     }

// //     draw() {
// //         if (!ctx) throw new Error("[Canvas-ctx] Game Error");

// //         ctx.fillStyle = "green";
// //         ctx.fillRect(
// //             this.position.x,
// //             this.position.y,
// //             this.width,
// //             this.height
// //         );

// //     }

// //     update() {
// //         this.draw();
// //         this.frames++;

// //         if (this.frames % 100 === 0 && this.target) {
// //             this.bullets.push(
// //                 new Bullet(
// //                     { x: this.position.x, y: this.position.y },
// //                     this.target
// //                 )
// //             );
// //         }
// //     }
// // }

// class Bullet {
//     position: { x: number; y: number };
//     velocity: { x: number; y: number };
//     center: { x: number; y: number };
//     enemy: Enemey;
//     radius: number;
//     bulletLife: number;
//     image: HTMLImageElement;

//     constructor({ x = 0, y = 0 }, enemy) {
//         this.position = { x: x, y: y };
//         this.velocity = { x: 0, y: 0 };
//         this.center = {
//             x: this.position.x + newTileSize,
//             y: this.position.y + newTileSize / 2,
//         };
//         this.radius = 6 * mapZoom;
//         this.enemy = enemy;
//         this.bulletLife = 500;

//         this.image = new Image();
//         this.image.src = "";
//     }

//     draw() {
//         if (!ctx) throw new Error("[Canvas-ctx] Game Error");
//         ctx.beginPath();
//         ctx.arc(
//             this.center.x,
//             this.center.y,
//             this.radius,
//             0,
//             Math.PI * 2
//         );
//         ctx.fillStyle = "white";
//         ctx.fill();
//     }

//     update() {
//         this.draw();

//         const angle = Math.atan2(
//             this.enemy.center.y - this.position.y / mapZoom,
//             this.enemy.center.x - this.position.x / mapZoom
//         );

//         this.velocity.x = Math.cos(angle) * bulletSpeed;
//         this.velocity.y = Math.sin(angle) * bulletSpeed;

//         this.center.x += this.velocity.x;
//         this.center.y += this.velocity.y;
//         this.bulletLife--;
//     }
// }


