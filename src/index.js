import {prepareEnv} from './env'
import {getBinaryImage} from './api'

const main = () => {
    prepareEnv()

const pic = getBinaryImage()
image.saveTo(pic,'/sdcard/ttttest.png') 
toast('aa1a')
}

main()