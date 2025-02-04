import * as THREE from "./three.module.js";
import { PointerLockControls } from "./PointerLockControls.js"

// 初始化场景、相机和渲染器和纹理加载器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const textureLoader = new THREE.TextureLoader();


const Maze = [  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
                [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
                [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],]

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 加载纹理
const brickTexture = textureLoader.load('./assets/texture/long_white_tiles_diff_1k.jpg')
const floorTexture = textureLoader.load('./assets/texture/asphalt_06_diff_1k.jpg')
const ceilingTexture = textureLoader.load('./assets/texture/marble_01_diff_1k.jpg');

// 创建走廊的几何体和材质
const wallGeometry = new THREE.BoxGeometry(10, 10, 10); // 墙壁
const wallMaterial = new THREE.MeshBasicMaterial({  map: brickTexture });

const floorGeometry = new THREE.BoxGeometry(10, 0.1, 10); // 地板和天花板
const floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture }); // 灰色地板

const ceilingGeometry = new THREE.BoxGeometry(10, 0.1, 10);
const ceilingMaterial = new THREE.MeshBasicMaterial({ map: ceilingTexture });

for (let i = 0; i < Maze.length; i++) {
    for (let j = 0; j < Maze[i].length; j++) {
        if (Maze[i][j] === 1) {
            const wall = new THREE.Mesh(wallGeometry, wallMaterial);
            wall.position.set(j * 10 + 5, 5, i * 10 + 5);
            scene.add(wall);
        }
        if (Maze[i][j] === 0) {
            const floor = new THREE.Mesh(floorGeometry, floorMaterial);
            floor.position.set(j * 10 + 5, 0, i * 10 + 5);
            scene.add(floor);
            const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
            ceiling.position.set(j * 10 + 5, 10, i * 10 + 5);
            scene.add(ceiling);
        }
    }

}


// 添加荧光灯效果
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 0);
scene.add(light);

// 设置相机初始位置
camera.position.z = 15;
camera.position.x = 15;
camera.position.y = 1.5; // 模拟玩家身高

camera.rotation.y = -Math.PI / 2;

let isJumping = false; // 跳跃状态标志
const gravity = -0.001; // 重力加速度
let velocityY = 0; // Y轴速度
const jumpStrength = 0.05; // 跳跃力度

// 添加第一人称控制
const controls = new PointerLockControls(camera, renderer.domElement);

// 点击页面以锁定指针
document.addEventListener('click', () => {
    controls.lock();
});

// 键盘控制
const keys = {};
const moveSpeed = 0.1;

document.addEventListener('keydown', (event) => {
    keys[event.code] = true;
});

document.addEventListener('keyup', (event) => {
    keys[event.code] = false;
});

// 更新玩家控制
function updateControls() {
    if (keys['KeyW']) { // 前进
        controls.moveForward(moveSpeed);
    }
    if (keys['KeyS']) { // 后退
        controls.moveForward(-moveSpeed);
    }
    if (keys['KeyA']) { // 左移
        controls.moveRight(-moveSpeed);
    }
    if (keys['KeyD']) { // 右移
        controls.moveRight(moveSpeed);
    }
    // 跳跃功能
    if (keys['Space'] && !isJumping) {
        velocityY = jumpStrength;
        isJumping = true;
    }

    if (isJumping) {
        // 应用重力和跳跃速度
        velocityY += gravity;
        controls.getObject().position.y += velocityY;

        // 简单的地面碰撞检测
        if (controls.getObject().position.y < 1.5) {
            controls.getObject().position.y = 1.5; // 恢复初始高度
            velocityY = 0; // 重置速度
            isJumping = false; // 结束跳跃
        }
    }


}

// 动画循环
function animate() {
    requestAnimationFrame(animate);

    // 更新玩家控制
    updateControls();


    // 渲染场景
    renderer.render(scene, camera);
}

// 启动动画循环
animate();

// 窗口大小调整时更新相机和渲染器
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});