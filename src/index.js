import { Symbols } from "./constant/symbols";
import { prepareEnv } from "./env";
import { getBinaryImage, detectSymbol } from "./api";
import { confirmCapacity, detectEnv } from "./sensor";
import { discharge, gotoWork,backToStation, leaveStation, moveTo,fire } from "./actions";
import { scanAndDig } from "./mineRadar";

const MainProcess = [
  {
    condition: {
        location: '空间站',
        capacity: '>= 10'
    },
    should: discharge,
    desc: '清空货仓'
  },
  {
    condition: {
        location: '空间站',
        capacity: '< 10'
    },
    should: leaveStation,
    desc: '出站'
  },
  {
    condition: {
        location: '太空',
        capacity: '< 90'
    },
    should: gotoWork,
    desc: '跃迁到矿场'
  },
  {
    condition: {
        location: '矿场',
        capacity: '< 90'
    },
    should: scanAndDig,
    desc: '挖挖挖'
  },
  {
      condition: {
        location: '空间站 !',
        capacity: '>= 90',
      },
      should: backToStation,
      desc: '回站'
  }
];

const main = () => {
  prepareEnv();
//   backToStation();return;
// image.saveTo(getBinaryImage(), '/sdcard/bbbb.png'); return
  const checkCondition = (status, condition) => {
    let keys = Object.keys(condition);
    for (let i = 0; i < keys.length; i++) {
        let val = condition[keys[i]]
     
        if(keys[i] === 'location'){
            let valArr = val.split(' ')
            let result = valArr[0] === status.location
            if(valArr[1] === '!')
            result = !result

            if(!result)
                return false
        }else if(keys[i] === 'capacity'){
            let valArr = val.split(' ')
            let result
            if(valArr[0] === '=') result = status.capacity===valArr[1]
            else if(valArr[0] === '>=') result = status.capacity >=valArr[1]
            else if(valArr[0] === '>') result = status.capacity >valArr[1]
            else if(valArr[0] === '<=') result = status.capacity <=valArr[1]
            else if(valArr[0] === '<') result = status.capacity <valArr[1]
            if(!result) return false
        }
      
    }
    return true;
  };

  while (true) {
  let status = {
    location: detectEnv(),
    capacity: confirmCapacity(),
  };
  logd('当前状态：',JSON.stringify(status));
  for  (let i = 0; i < MainProcess.length; i++) {
    let process = MainProcess[i];
    if (checkCondition(status, process.condition)) {
      if (process.should) {
        toast(process.desc)
        process.should();
      }
    }
  }

  
  sleep(8000);
}
};



main();
