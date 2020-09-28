
// 截图并二值化
export const getBinaryImage = (threshold=90) =>{
    let screenshot = image.captureFullScreenEx();
    if (screenshot) {
        let binary = image.binaryzation(screenshot,0,threshold);
        image.recycle(screenshot)
        if (binary) {
           return binary
        }
    }
    return null
}
