// 启动服务
export const autoServiceStart = (time) => {
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
}

export const requestPermission =() => {
    var req = image.requestScreenCapture(10000,0);
    if (!req) {
     req = image.requestScreenCapture(10000,0);
    }
    if (!req) {
     
        return;
    }
    sleep(1000)
    return true
}

export const prepareEnv = () => {
    if (!autoServiceStart(3)) {
        logd("自动化服务启动失败，无法执行脚本")
        exit();
        return;
    }
    if(!requestPermission()){
        logd("申请权限失败");
        exit();
        return
    }
}