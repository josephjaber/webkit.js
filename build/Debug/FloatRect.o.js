// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](8 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 8;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9FloatRectC1ERKNS_7IntRectE;
/* memory initializer */ allocate([32,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _ceilf=env._ceilf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore9unionRectERKN3WTF6VectorINS_9FloatRectELj0ENS0_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, i23 = 0;
 i3 = i1;
 _memset(i3 | 0, 0, 16) | 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i2 | 0;
 i2 = i1 + 8 | 0;
 i6 = i1 + 12 | 0;
 i7 = i1 | 0;
 i8 = i1 + 4 | 0;
 i1 = 0;
 while (1) {
  if (i4 >>> 0 <= i1 >>> 0) {
   i9 = 4;
   break;
  }
  i10 = HEAP32[i5 >> 2] | 0;
  i11 = i10 + (i1 << 4) | 0;
  d12 = +HEAPF32[i10 + (i1 << 4) + 8 >> 2];
  L7 : do {
   if (d12 > +0) {
    d13 = +HEAPF32[i10 + (i1 << 4) + 12 >> 2];
    if (d13 <= +0) {
     break;
    }
    d14 = +HEAPF32[i2 >> 2];
    do {
     if (d14 > +0) {
      d15 = +HEAPF32[i6 >> 2];
      if (d15 <= +0) {
       break;
      }
      d16 = +HEAPF32[i7 >> 2];
      d17 = +HEAPF32[i11 >> 2];
      d18 = d17 < d16 ? d17 : d16;
      d19 = +HEAPF32[i8 >> 2];
      d20 = +HEAPF32[i10 + (i1 << 4) + 4 >> 2];
      d21 = d20 < d19 ? d20 : d19;
      d22 = d14 + d16;
      d16 = d12 + d17;
      d17 = d15 + d19;
      d19 = d13 + d20;
      HEAPF32[i7 >> 2] = d18;
      HEAPF32[i8 >> 2] = d21;
      HEAPF32[i2 >> 2] = (d22 < d16 ? d16 : d22) - d18;
      HEAPF32[i6 >> 2] = (d17 < d19 ? d19 : d17) - d21;
      break L7;
     }
    } while (0);
    i23 = i11;
    HEAP32[i3 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i3 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
    HEAP32[i3 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
    HEAP32[i3 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
   }
  } while (0);
  i11 = i1 + 1 | 0;
  if (i11 >>> 0 < i4 >>> 0) {
   i1 = i11;
  } else {
   i9 = 13;
   break;
  }
 }
 if ((i9 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i9 | 0) == 13) {
  return;
 }
}
function __ZN7WebCore14roundedIntRectERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i2;
 d4 = +HEAPF32[i3 >> 2];
 d5 = +HEAPF32[i3 + 4 >> 2];
 d6 = +_round(+d4);
 do {
  if (d6 < +2147483647) {
   if (d6 <= +-2147483648) {
    i7 = 0;
    i8 = -2147483648;
    break;
   }
   i7 = 0;
   i8 = ~~d6;
  } else {
   i7 = 0;
   i8 = 2147483647;
  }
 } while (0);
 d6 = +_round(+d5);
 do {
  if (d6 < +2147483647) {
   if (d6 <= +-2147483648) {
    i9 = -2147483648;
    i10 = 0;
    break;
   }
   i9 = ~~d6;
   i10 = 0;
  } else {
   i9 = 2147483647;
   i10 = 0;
  }
 } while (0);
 i3 = i2 + 8 | 0;
 d6 = +HEAPF32[i3 >> 2];
 d5 = +HEAPF32[i3 + 4 >> 2];
 d4 = +_round(+d6);
 do {
  if (d4 < +2147483647) {
   if (d4 <= +-2147483648) {
    i11 = 0;
    i12 = -2147483648;
    break;
   }
   i11 = 0;
   i12 = ~~d4;
  } else {
   i11 = 0;
   i12 = 2147483647;
  }
 } while (0);
 d4 = +_round(+d5);
 do {
  if (d4 < +2147483647) {
   if (d4 <= +-2147483648) {
    i13 = -2147483648;
    i14 = 0;
    break;
   }
   i13 = ~~d4;
   i14 = 0;
  } else {
   i13 = 2147483647;
   i14 = 0;
  }
 } while (0);
 i3 = i1;
 HEAP32[i3 >> 2] = i10 | i8;
 HEAP32[i3 + 4 >> 2] = i9 | i7;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = i14 | i12;
 HEAP32[i7 + 4 >> 2] = i13 | i11;
 return;
}
function __ZN7WebCore15enclosedIntRectERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i2;
 d4 = +HEAPF32[i3 >> 2];
 d5 = +HEAPF32[i3 + 4 >> 2];
 d6 = +Math_ceil(d4);
 do {
  if (d6 < +2147483647) {
   if (d6 <= +-2147483648) {
    i7 = -2147483648;
    break;
   }
   i7 = ~~d6;
  } else {
   i7 = 2147483647;
  }
 } while (0);
 d6 = +Math_ceil(d5);
 do {
  if (d6 < +2147483647) {
   if (d6 <= +-2147483648) {
    i8 = -2147483648;
    break;
   }
   i8 = ~~d6;
  } else {
   i8 = 2147483647;
  }
 } while (0);
 d6 = +HEAPF32[i2 + 4 >> 2] + +HEAPF32[i2 + 12 >> 2];
 d5 = +Math_floor(d4 + +HEAPF32[i2 + 8 >> 2]);
 do {
  if (d5 < +2147483647) {
   if (d5 <= +-2147483648) {
    i9 = -2147483648;
    break;
   }
   i9 = ~~d5;
  } else {
   i9 = 2147483647;
  }
 } while (0);
 d5 = +Math_floor(d6);
 do {
  if (d5 < +2147483647) {
   if (d5 <= +-2147483648) {
    i10 = -2147483648;
    break;
   }
   i10 = ~~d5;
  } else {
   i10 = 2147483647;
  }
 } while (0);
 i2 = i9 - i7 | 0;
 i9 = i10 - i8 | 0;
 i10 = (i2 | 0) > 0;
 i3 = (i9 | 0) > 0;
 i11 = i1;
 HEAP32[i11 >> 2] = i7;
 HEAP32[i11 + 4 >> 2] = i8;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = (i3 ? 0 : 0) | (i10 ? i2 : 0);
 HEAP32[i8 + 4 >> 2] = (i3 ? i9 : 0) | (i10 ? 0 : 0);
 return;
}
function __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, d6 = +0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2;
 d4 = +HEAPF32[i3 >> 2];
 d5 = +HEAPF32[i3 + 4 >> 2];
 d6 = +Math_floor(d4);
 do {
  if (d6 < +2147483647) {
   if (d6 <= +-2147483648) {
    i7 = -2147483648;
    break;
   }
   i7 = ~~d6;
  } else {
   i7 = 2147483647;
  }
 } while (0);
 d6 = +Math_floor(d5);
 do {
  if (d6 < +2147483647) {
   if (d6 <= +-2147483648) {
    i8 = -2147483648;
    break;
   }
   i8 = ~~d6;
  } else {
   i8 = 2147483647;
  }
 } while (0);
 d6 = +HEAPF32[i2 + 4 >> 2] + +HEAPF32[i2 + 12 >> 2];
 d5 = +Math_ceil(d4 + +HEAPF32[i2 + 8 >> 2]);
 do {
  if (d5 < +2147483647) {
   if (d5 <= +-2147483648) {
    i9 = -2147483648;
    break;
   }
   i9 = ~~d5;
  } else {
   i9 = 2147483647;
  }
 } while (0);
 d5 = +Math_ceil(d6);
 do {
  if (d5 < +2147483647) {
   if (d5 <= +-2147483648) {
    i10 = -2147483648;
    break;
   }
   i10 = ~~d5;
  } else {
   i10 = 2147483647;
  }
 } while (0);
 i2 = i1;
 HEAP32[i2 >> 2] = i7;
 HEAP32[i2 + 4 >> 2] = i8;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = i9 - i7;
 HEAP32[i2 + 4 >> 2] = i10 - i8;
 return;
}
function __ZN7WebCore9FloatRect5uniteERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, i5 = 0, d6 = +0, i7 = 0, d8 = +0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, d17 = +0;
 d3 = +HEAPF32[i2 + 8 >> 2];
 if (d3 <= +0) {
  return;
 }
 d4 = +HEAPF32[i2 + 12 >> 2];
 if (d4 <= +0) {
  return;
 }
 i5 = i1 + 8 | 0;
 d6 = +HEAPF32[i5 >> 2];
 do {
  if (d6 > +0) {
   i7 = i1 + 12 | 0;
   d8 = +HEAPF32[i7 >> 2];
   if (d8 <= +0) {
    break;
   }
   i9 = i1 | 0;
   d10 = +HEAPF32[i9 >> 2];
   d11 = +HEAPF32[i2 >> 2];
   d12 = d11 < d10 ? d11 : d10;
   i13 = i1 + 4 | 0;
   d14 = +HEAPF32[i13 >> 2];
   d15 = +HEAPF32[i2 + 4 >> 2];
   d16 = d15 < d14 ? d15 : d14;
   d17 = d10 + d6;
   d10 = d11 + d3;
   d11 = d14 + d8;
   d8 = d15 + d4;
   HEAPF32[i9 >> 2] = d12;
   HEAPF32[i13 >> 2] = d16;
   HEAPF32[i5 >> 2] = (d17 < d10 ? d10 : d17) - d12;
   HEAPF32[i7 >> 2] = (d11 < d8 ? d8 : d11) - d16;
   return;
  }
 } while (0);
 i5 = i1;
 i1 = i2;
 HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, i11 = 0, d12 = +0, i13 = 0;
 if (__ZNK7WebCore9FloatSize6isZeroEv(i2 + 8 | 0) | 0) {
  return;
 }
 if (__ZNK7WebCore9FloatSize6isZeroEv(i1 + 8 | 0) | 0) {
  i3 = i1;
  i4 = i2;
  HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
  HEAP32[i3 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
  HEAP32[i3 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
  return;
 } else {
  i4 = i1 | 0;
  d5 = +HEAPF32[i4 >> 2];
  d6 = +HEAPF32[i2 >> 2];
  d7 = d6 < d5 ? d6 : d5;
  i3 = i1 + 4 | 0;
  d8 = +HEAPF32[i3 >> 2];
  d9 = +HEAPF32[i2 + 4 >> 2];
  d10 = d9 < d8 ? d9 : d8;
  i11 = i1 + 8 | 0;
  d12 = d5 + +HEAPF32[i11 >> 2];
  d5 = d6 + +HEAPF32[i2 + 8 >> 2];
  i13 = i1 + 12 | 0;
  d6 = d8 + +HEAPF32[i13 >> 2];
  d8 = d9 + +HEAPF32[i2 + 12 >> 2];
  HEAPF32[i4 >> 2] = d7;
  HEAPF32[i3 >> 2] = d10;
  HEAPF32[i11 >> 2] = (d12 < d5 ? d5 : d12) - d7;
  HEAPF32[i13 >> 2] = (d6 < d8 ? d8 : d6) - d10;
  return;
 }
}
function __ZN7WebCore9FloatRect11fitToPointsERKNS_10FloatPointES3_S3_S3_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0;
 d6 = +HEAPF32[i2 >> 2];
 d7 = +HEAPF32[i3 >> 2];
 d8 = +HEAPF32[i4 >> 2];
 d9 = +HEAPF32[i5 >> 2];
 d10 = d9 < d8 ? d9 : d8;
 d11 = d7 < d6 ? d7 : d6;
 d12 = d10 < d11 ? d10 : d11;
 d11 = +HEAPF32[i2 + 4 >> 2];
 d10 = +HEAPF32[i3 + 4 >> 2];
 d13 = +HEAPF32[i4 + 4 >> 2];
 d14 = +HEAPF32[i5 + 4 >> 2];
 d15 = d14 < d13 ? d14 : d13;
 d16 = d10 < d11 ? d10 : d11;
 d17 = d15 < d16 ? d15 : d16;
 d16 = d6 < d7 ? d7 : d6;
 d6 = d8 < d9 ? d9 : d8;
 d8 = d11 < d10 ? d10 : d11;
 d11 = d13 < d14 ? d14 : d13;
 HEAPF32[i1 >> 2] = d12;
 HEAPF32[i1 + 4 >> 2] = d17;
 HEAPF32[i1 + 8 >> 2] = (d16 < d6 ? d6 : d16) - d12;
 HEAPF32[i1 + 12 >> 2] = (d8 < d11 ? d11 : d8) - d17;
 return;
}
function __ZNK7WebCore9FloatRect8containsERKNS_10FloatPointENS0_12ContainsModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0, i7 = 0;
 if ((i3 | 0) == 0) {
  d4 = +HEAPF32[i2 >> 2];
  d5 = +HEAPF32[i2 + 4 >> 2];
  d6 = +HEAPF32[i1 >> 2];
  if (d6 > d4) {
   i7 = 0;
   return i7 | 0;
  }
  if (d6 + +HEAPF32[i1 + 8 >> 2] < d4) {
   i7 = 0;
   return i7 | 0;
  }
  d4 = +HEAPF32[i1 + 4 >> 2];
  if (d4 > d5) {
   i7 = 0;
   return i7 | 0;
  }
  i7 = d4 + +HEAPF32[i1 + 12 >> 2] >= d5;
  return i7 | 0;
 } else {
  d5 = +HEAPF32[i1 >> 2];
  d4 = +HEAPF32[i2 >> 2];
  if (d5 >= d4) {
   i7 = 0;
   return i7 | 0;
  }
  if (d5 + +HEAPF32[i1 + 8 >> 2] <= d4) {
   i7 = 0;
   return i7 | 0;
  }
  d4 = +HEAPF32[i1 + 4 >> 2];
  d5 = +HEAPF32[i2 + 4 >> 2];
  if (d4 >= d5) {
   i7 = 0;
   return i7 | 0;
  }
  i7 = d4 + +HEAPF32[i1 + 12 >> 2] > d5;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore9FloatRect9intersectERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, d6 = +0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, i11 = 0, d12 = +0, i13 = 0;
 i3 = i1 | 0;
 d4 = +HEAPF32[i3 >> 2];
 d5 = +HEAPF32[i2 >> 2];
 d6 = d4 < d5 ? d5 : d4;
 i7 = i1 + 4 | 0;
 d8 = +HEAPF32[i7 >> 2];
 d9 = +HEAPF32[i2 + 4 >> 2];
 d10 = d8 < d9 ? d9 : d8;
 i11 = i1 + 8 | 0;
 d12 = d4 + +HEAPF32[i11 >> 2];
 d4 = d5 + +HEAPF32[i2 + 8 >> 2];
 d5 = d4 < d12 ? d4 : d12;
 i13 = i1 + 12 | 0;
 d12 = d8 + +HEAPF32[i13 >> 2];
 d8 = d9 + +HEAPF32[i2 + 12 >> 2];
 d9 = d8 < d12 ? d8 : d12;
 i2 = d6 < d5 & d10 < d9;
 d12 = i2 ? d6 : +0;
 d6 = i2 ? d10 : +0;
 HEAPF32[i3 >> 2] = d12;
 HEAPF32[i7 >> 2] = d6;
 HEAPF32[i11 >> 2] = (i2 ? d5 : +0) - d12;
 HEAPF32[i13 >> 2] = (i2 ? d9 : +0) - d6;
 return;
}
function __ZNK7WebCore9FloatRect10intersectsERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, i5 = 0, d6 = +0, d7 = +0, d8 = +0, d9 = +0;
 d3 = +HEAPF32[i1 + 8 >> 2];
 do {
  if (d3 > +0) {
   d4 = +HEAPF32[i1 + 12 >> 2];
   if (d4 <= +0) {
    i5 = 0;
    break;
   }
   d6 = +HEAPF32[i2 + 8 >> 2];
   if (d6 <= +0) {
    i5 = 0;
    break;
   }
   d7 = +HEAPF32[i2 + 12 >> 2];
   if (d7 <= +0) {
    i5 = 0;
    break;
   }
   d8 = +HEAPF32[i1 >> 2];
   d9 = +HEAPF32[i2 >> 2];
   if (d8 >= d9 + d6) {
    i5 = 0;
    break;
   }
   if (d9 >= d8 + d3) {
    i5 = 0;
    break;
   }
   d8 = +HEAPF32[i1 + 4 >> 2];
   d9 = +HEAPF32[i2 + 4 >> 2];
   if (d8 >= d9 + d7) {
    i5 = 0;
    break;
   }
   i5 = d9 < d8 + d4;
  } else {
   i5 = 0;
  }
 } while (0);
 return i5 | 0;
}
function __ZN7WebCore7mapRectERKNS_9FloatRectES2_S2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 d5 = +HEAPF32[i3 + 8 >> 2];
 do {
  if (d5 != +0) {
   d6 = +HEAPF32[i3 + 12 >> 2];
   if (d6 == +0) {
    break;
   }
   d7 = +HEAPF32[i4 + 8 >> 2] / d5;
   d8 = +HEAPF32[i4 + 12 >> 2] / d6;
   d6 = +HEAPF32[i4 + 4 >> 2] + d8 * (+HEAPF32[i2 + 4 >> 2] - +HEAPF32[i3 + 4 >> 2]);
   d9 = d7 * +HEAPF32[i2 + 8 >> 2];
   d10 = d8 * +HEAPF32[i2 + 12 >> 2];
   HEAPF32[i1 >> 2] = +HEAPF32[i4 >> 2] + d7 * (+HEAPF32[i2 >> 2] - +HEAPF32[i3 >> 2]);
   HEAPF32[i1 + 4 >> 2] = d6;
   HEAPF32[i1 + 8 >> 2] = d9;
   HEAPF32[i1 + 12 >> 2] = d10;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore9FloatRect22isExpressibleAsIntRectEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, i3 = 0, d4 = +0, d5 = +0, d6 = +0, d7 = +0;
 d2 = +HEAPF32[i1 >> 2];
 if (!(d2 > +-2147483648 & d2 < +2147483648)) {
  i3 = 0;
  return i3 | 0;
 }
 d4 = +HEAPF32[i1 + 4 >> 2];
 if (!(d4 > +-2147483648 & d4 < +2147483648)) {
  i3 = 0;
  return i3 | 0;
 }
 d5 = +HEAPF32[i1 + 8 >> 2];
 if (!(d5 > +-2147483648 & d5 < +2147483648)) {
  i3 = 0;
  return i3 | 0;
 }
 d6 = +HEAPF32[i1 + 12 >> 2];
 if (!(d6 > +-2147483648 & d6 < +2147483648)) {
  i3 = 0;
  return i3 | 0;
 }
 d7 = d2 + d5;
 if (!(d7 > +-2147483648 & d7 < +2147483648)) {
  i3 = 0;
  return i3 | 0;
 }
 d7 = d4 + d6;
 if (d7 <= +-2147483648) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = d7 < +2147483648;
 return i3 | 0;
}
function __ZN7WebCore9FloatRect11fitToPointsERKNS_10FloatPointES3_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0;
 d5 = +HEAPF32[i2 >> 2];
 d6 = +HEAPF32[i3 >> 2];
 d7 = +HEAPF32[i4 >> 2];
 d8 = d6 < d5 ? d6 : d5;
 d9 = d8 > d7 ? d7 : d8;
 d8 = +HEAPF32[i2 + 4 >> 2];
 d10 = +HEAPF32[i3 + 4 >> 2];
 d11 = +HEAPF32[i4 + 4 >> 2];
 d12 = d10 < d8 ? d10 : d8;
 d13 = d12 > d11 ? d11 : d12;
 d12 = d5 < d6 ? d6 : d5;
 d5 = d8 < d10 ? d10 : d8;
 HEAPF32[i1 >> 2] = d9;
 HEAPF32[i1 + 4 >> 2] = d13;
 HEAPF32[i1 + 8 >> 2] = (d12 < d7 ? d7 : d12) - d9;
 HEAPF32[i1 + 12 >> 2] = (d5 < d11 ? d11 : d5) - d13;
 return;
}
function __ZN7WebCore9FloatRect16uniteEvenIfEmptyERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, d6 = +0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, i11 = 0, d12 = +0, i13 = 0;
 i3 = i1 | 0;
 d4 = +HEAPF32[i3 >> 2];
 d5 = +HEAPF32[i2 >> 2];
 d6 = d5 < d4 ? d5 : d4;
 i7 = i1 + 4 | 0;
 d8 = +HEAPF32[i7 >> 2];
 d9 = +HEAPF32[i2 + 4 >> 2];
 d10 = d9 < d8 ? d9 : d8;
 i11 = i1 + 8 | 0;
 d12 = d4 + +HEAPF32[i11 >> 2];
 d4 = d5 + +HEAPF32[i2 + 8 >> 2];
 i13 = i1 + 12 | 0;
 d5 = d8 + +HEAPF32[i13 >> 2];
 d8 = d9 + +HEAPF32[i2 + 12 >> 2];
 HEAPF32[i3 >> 2] = d6;
 HEAPF32[i7 >> 2] = d10;
 HEAPF32[i11 >> 2] = (d12 < d4 ? d4 : d12) - d6;
 HEAPF32[i13 >> 2] = (d5 < d8 ? d8 : d5) - d10;
 return;
}
function __ZNK7WebCore9FloatRect4dumpERN3WTF11PrintStreamE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i1;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i7;
 i7 = i1 + 8 | 0;
 i1 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 __ZNK7WebCore10FloatPoint4dumpERN3WTF11PrintStreamE(i4, i2);
 __ZN3WTF13printInternalERNS_11PrintStreamEPKc(i2, H_BASE + 8 | 0);
 __ZNK7WebCore9FloatSize4dumpERN3WTF11PrintStreamE(i5, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FloatRect6extendERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, d6 = +0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, i12 = 0;
 i3 = i1 | 0;
 d4 = +HEAPF32[i3 >> 2];
 d5 = +HEAPF32[i2 >> 2];
 d6 = d5 < d4 ? d5 : d4;
 i7 = i1 + 4 | 0;
 d8 = +HEAPF32[i7 >> 2];
 d9 = +HEAPF32[i2 + 4 >> 2];
 d10 = d9 < d8 ? d9 : d8;
 i2 = i1 + 8 | 0;
 d11 = d4 + +HEAPF32[i2 >> 2];
 i12 = i1 + 12 | 0;
 d4 = d8 + +HEAPF32[i12 >> 2];
 HEAPF32[i3 >> 2] = d6;
 HEAPF32[i7 >> 2] = d10;
 HEAPF32[i2 >> 2] = (d11 < d5 ? d5 : d11) - d6;
 HEAPF32[i12 >> 2] = (d4 < d9 ? d9 : d4) - d10;
 return;
}
function __ZN7WebCore9FloatRectC2ERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i2;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i7;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i1 | 0, i4);
 i4 = i2 + 8 | 0;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i2;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i1 + 8 | 0, i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i2;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i7;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i1 | 0, i4);
 i4 = i2 + 8 | 0;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i2;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i1 + 8 | 0, i5);
 STACKTOP = i3;
 return;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZN7WebCore9FloatRect11fitToPointsERKNS_10FloatPointES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0;
 d4 = +HEAPF32[i2 >> 2];
 d5 = +HEAPF32[i3 >> 2];
 d6 = d5 < d4 ? d5 : d4;
 d7 = +HEAPF32[i2 + 4 >> 2];
 d8 = +HEAPF32[i3 + 4 >> 2];
 d9 = d8 < d7 ? d8 : d7;
 HEAPF32[i1 >> 2] = d6;
 HEAPF32[i1 + 4 >> 2] = d9;
 HEAPF32[i1 + 8 >> 2] = (d4 < d5 ? d5 : d4) - d6;
 HEAPF32[i1 + 12 >> 2] = (d7 < d8 ? d8 : d7) - d9;
 return;
}
function __ZNK7WebCore9FloatRect8containsERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, i5 = 0;
 d3 = +HEAPF32[i1 >> 2];
 d4 = +HEAPF32[i2 >> 2];
 if (d3 > d4) {
  i5 = 0;
  return i5 | 0;
 }
 if (d3 + +HEAPF32[i1 + 8 >> 2] < d4 + +HEAPF32[i2 + 8 >> 2]) {
  i5 = 0;
  return i5 | 0;
 }
 d4 = +HEAPF32[i1 + 4 >> 2];
 d3 = +HEAPF32[i2 + 4 >> 2];
 if (d4 > d3) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = d4 + +HEAPF32[i1 + 12 >> 2] >= d3 + +HEAPF32[i2 + 12 >> 2];
 return i5 | 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore9FloatRect5scaleEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0;
 i4 = i1 | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] * d2;
 i4 = i1 + 4 | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] * d3;
 i4 = i1 + 8 | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] * d2;
 i4 = i1 + 12 | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] * d3;
 return;
}
function __ZN7WebCore9FloatRect15narrowPrecisionEdddd(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 HEAPF32[i1 >> 2] = d2;
 HEAPF32[i1 + 4 >> 2] = d3;
 HEAPF32[i1 + 8 >> 2] = d4;
 HEAPF32[i1 + 12 >> 2] = d5;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore9FloatRectC2ERKNS_7IntRectE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_ceilf": _ceilf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore9FloatRect6extendERKNS_10FloatPointE","_strlen","__ZNK7WebCore9FloatRect10intersectsERKS0_","__ZN7WebCore9FloatRect11fitToPointsERKNS_10FloatPointES3_","__ZN7WebCore9unionRectERKN3WTF6VectorINS_9FloatRectELj0ENS0_15CrashOnOverflowEEE","__ZN7WebCore14roundedIntRectERKNS_9FloatRectE","__ZN7WebCore16enclosingIntRectERKNS_9FloatRectE","__ZN7WebCore9FloatRect5scaleEff","_memset","_memcpy","__ZN7WebCore9FloatRect9intersectERKS0_","__ZNK7WebCore9FloatRect8containsERKS0_","__ZN7WebCore15enclosedIntRectERKNS_9FloatRectE","__ZN7WebCore9FloatRect5uniteERKS0_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore9FloatRect14uniteIfNonZeroERKS0_","__ZN7WebCore9FloatRectC2ERKNS_7IntRectE","__ZN7WebCore9FloatRect11fitToPointsERKNS_10FloatPointES3_S3_S3_","__ZN7WebCore7mapRectERKNS_9FloatRectES2_S2_","__ZNK7WebCore9FloatRect4dumpERN3WTF11PrintStreamE","__ZN7WebCore9FloatRect16uniteEvenIfEmptyERKS0_","__ZN7WebCore9FloatRect15narrowPrecisionEdddd","__ZN7WebCore9FloatRect11fitToPointsERKNS_10FloatPointES3_S3_","__ZNK7WebCore9FloatRect22isExpressibleAsIntRectEv","__ZNK7WebCore9FloatRect8containsERKNS_10FloatPointENS0_12ContainsModeE"]
