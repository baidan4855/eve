'use strict';

// 启动服务
var autoServiceStart = function autoServiceStart(time) {
  for (var i = 0; i < time; i++) {
    if (isServiceOk()) {
      return true;
    }

    var started = startEnv();
    logd("第" + (i + 1) + "次启动服务结果: " + started);

    if (isServiceOk()) {
      return true;
    }
  }

  return isServiceOk();
};
var requestPermission = function requestPermission() {
  var req = image.requestScreenCapture(10000, 0);

  if (!req) {
    req = image.requestScreenCapture(10000, 0);
  }

  if (!req) {
    return;
  }

  sleep(1000);
  return true;
};
var prepareEnv = function prepareEnv() {
  if (!autoServiceStart(3)) {
    logd("自动化服务启动失败，无法执行脚本");
    exit();
    return;
  }

  if (!requestPermission()) {
    logd("申请权限失败");
    exit();
    return;
  }
};

// 截图并二值化
var getBinaryImage = function getBinaryImage() {
  var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 90;
  var screenshot = image.captureFullScreenEx();

  if (screenshot) {
    var binary = image.binaryzation(screenshot, 0, threshold);
    image.recycle(screenshot);

    if (binary) {
      return binary;
    }
  }

  return null;
};

var main = function main() {
  prepareEnv();
  var pic = getBinaryImage();
  image.saveTo(pic, '/sdcard/ttttest.png');
  toast('aa1a');
};

main();
