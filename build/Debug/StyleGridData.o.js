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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13StyleGridDataC1Ev;
/* no memory initializer */
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
;
;
;
var Math_min = Math.min;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13StyleGridDataC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 HEAP32[i1 >> 2] = 1;
 __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEC2ERKS4_(i1 + 4 | 0, i2 + 4 | 0);
 __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEC2ERKS4_(i1 + 16 | 0, i2 + 16 | 0);
 i7 = i1 + 28 | 0;
 i8 = i7 | 0;
 _memset(i7 | 0, 0, 20) | 0;
 i7 = HEAP32[i2 + 28 >> 2] | 0;
 i9 = HEAP32[i2 + 32 >> 2] | 0;
 i10 = i7 + (i9 << 4) | 0;
 L1 : do {
  if ((HEAP32[i2 + 40 >> 2] | 0) != 0) {
   L3 : do {
    if ((i9 | 0) == 0) {
     i11 = i7;
    } else {
     i12 = i7;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i11 = i12;
       break L3;
      }
      i12 = i12 + 16 | 0;
      if ((i12 | 0) == (i10 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i10 | 0)) {
    break;
   } else {
    i14 = i11;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i5, i8, i14 | 0, i14);
    i12 = i14 + 16 | 0;
    if ((i12 | 0) == (i10 | 0)) {
     break L1;
    } else {
     i15 = i12;
    }
    while (1) {
     i12 = HEAP32[i15 >> 2] | 0;
     if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
      break;
     }
     i12 = i15 + 16 | 0;
     if ((i12 | 0) == (i10 | 0)) {
      break L1;
     } else {
      i15 = i12;
     }
    }
    if ((i15 | 0) == (i10 | 0)) {
     break;
    } else {
     i14 = i15;
    }
   }
  }
 } while (0);
 i15 = i1 + 48 | 0;
 i14 = i15 | 0;
 _memset(i15 | 0, 0, 20) | 0;
 i15 = HEAP32[i2 + 48 >> 2] | 0;
 i10 = HEAP32[i2 + 52 >> 2] | 0;
 i8 = i15 + (i10 << 4) | 0;
 L15 : do {
  if ((HEAP32[i2 + 60 >> 2] | 0) != 0) {
   L17 : do {
    if ((i10 | 0) == 0) {
     i16 = i15;
    } else {
     i5 = i15;
     while (1) {
      i11 = HEAP32[i5 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i16 = i5;
       break L17;
      }
      i5 = i5 + 16 | 0;
      if ((i5 | 0) == (i8 | 0)) {
       break L15;
      }
     }
    }
   } while (0);
   if ((i16 | 0) == (i8 | 0)) {
    break;
   } else {
    i17 = i16;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i4, i14, i17 | 0, i17);
    i5 = i17 + 16 | 0;
    if ((i5 | 0) == (i8 | 0)) {
     break L15;
    } else {
     i18 = i5;
    }
    while (1) {
     i5 = HEAP32[i18 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      break;
     }
     i5 = i18 + 16 | 0;
     if ((i5 | 0) == (i8 | 0)) {
      break L15;
     } else {
      i18 = i5;
     }
    }
    if ((i18 | 0) == (i8 | 0)) {
     break;
    } else {
     i17 = i18;
    }
   }
  }
 } while (0);
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 i18 = i1 + 80 | 0;
 i17 = i2 + 80 | 0;
 i8 = i18;
 i14 = HEAP32[i17 >> 2] | 0;
 i4 = HEAP32[i17 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i14;
 HEAP32[i8 + 4 >> 2] = i4;
 if ((i14 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i18 | 0);
 }
 HEAPF64[i1 + 88 >> 3] = +HEAPF64[i2 + 88 >> 3];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 96 >> 2];
 i18 = i1 + 104 | 0;
 i4 = i2 + 104 | 0;
 i14 = i18;
 i8 = HEAP32[i4 >> 2] | 0;
 i17 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i8;
 HEAP32[i14 + 4 >> 2] = i17;
 if ((i8 & 0 | 0) == 0 & (i17 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i18 | 0);
 }
 HEAPF64[i1 + 112 >> 3] = +HEAPF64[i2 + 112 >> 3];
 HEAP32[i1 + 120 >> 2] = HEAP32[i2 + 120 >> 2];
 HEAP32[i1 + 128 >> 2] = HEAP32[i2 + 128 >> 2];
 i18 = i1 + 136 | 0;
 i17 = i2 + 136 | 0;
 i8 = i18;
 i14 = HEAP32[i17 >> 2] | 0;
 i4 = HEAP32[i17 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i14;
 HEAP32[i8 + 4 >> 2] = i4;
 if ((i14 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i18 | 0);
 }
 HEAPF64[i1 + 144 >> 3] = +HEAPF64[i2 + 144 >> 3];
 HEAP32[i1 + 152 >> 2] = HEAP32[i2 + 152 >> 2];
 i18 = i1 + 160 | 0;
 i4 = i2 + 160 | 0;
 i14 = i18;
 i8 = HEAP32[i4 >> 2] | 0;
 i17 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i8;
 HEAP32[i14 + 4 >> 2] = i17;
 if ((i8 & 0 | 0) == 0 & (i17 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i18 | 0);
 }
 HEAPF64[i1 + 168 >> 3] = +HEAPF64[i2 + 168 >> 3];
 HEAP32[i1 + 176 >> 2] = HEAP32[i2 + 176 >> 2];
 i18 = i1 + 184 | 0;
 i17 = i18 | 0;
 _memset(i18 | 0, 0, 20) | 0;
 i18 = HEAP32[i2 + 184 >> 2] | 0;
 i8 = HEAP32[i2 + 188 >> 2] | 0;
 i14 = i18 + (i8 * 20 & -1) | 0;
 if ((HEAP32[i2 + 196 >> 2] | 0) == 0) {
  i19 = i1 + 204 | 0;
  i20 = i2 + 204 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  HEAP32[i19 >> 2] = i21;
  i22 = i1 + 208 | 0;
  i23 = i2 + 208 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  HEAP32[i22 >> 2] = i24;
  STACKTOP = i3;
  return;
 }
 L44 : do {
  if ((i8 | 0) == 0) {
   i25 = i18;
  } else {
   i4 = i18;
   while (1) {
    i16 = HEAP32[i4 >> 2] | 0;
    if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
     i25 = i4;
     break L44;
    }
    i4 = i4 + 20 | 0;
    if ((i4 | 0) == (i14 | 0)) {
     break;
    }
   }
   i19 = i1 + 204 | 0;
   i20 = i2 + 204 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   HEAP32[i19 >> 2] = i21;
   i22 = i1 + 208 | 0;
   i23 = i2 + 208 | 0;
   i24 = HEAP32[i23 >> 2] | 0;
   HEAP32[i22 >> 2] = i24;
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i25 | 0) == (i14 | 0)) {
  i19 = i1 + 204 | 0;
  i20 = i2 + 204 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  HEAP32[i19 >> 2] = i21;
  i22 = i1 + 208 | 0;
  i23 = i2 + 208 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  HEAP32[i22 >> 2] = i24;
  STACKTOP = i3;
  return;
 } else {
  i26 = i25;
 }
 L52 : while (1) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKS1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i6, i17, i26 | 0, i26);
  i25 = i26 + 20 | 0;
  if ((i25 | 0) == (i14 | 0)) {
   i27 = 40;
   break;
  } else {
   i28 = i25;
  }
  while (1) {
   i25 = HEAP32[i28 >> 2] | 0;
   if (!((i25 | 0) == (-1 | 0) | (i25 | 0) == 0)) {
    break;
   }
   i25 = i28 + 20 | 0;
   if ((i25 | 0) == (i14 | 0)) {
    i27 = 42;
    break L52;
   } else {
    i28 = i25;
   }
  }
  if ((i28 | 0) == (i14 | 0)) {
   i27 = 41;
   break;
  } else {
   i26 = i28;
  }
 }
 if ((i27 | 0) == 40) {
  i19 = i1 + 204 | 0;
  i20 = i2 + 204 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  HEAP32[i19 >> 2] = i21;
  i22 = i1 + 208 | 0;
  i23 = i2 + 208 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  HEAP32[i22 >> 2] = i24;
  STACKTOP = i3;
  return;
 } else if ((i27 | 0) == 41) {
  i19 = i1 + 204 | 0;
  i20 = i2 + 204 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  HEAP32[i19 >> 2] = i21;
  i22 = i1 + 208 | 0;
  i23 = i2 + 208 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  HEAP32[i22 >> 2] = i24;
  STACKTOP = i3;
  return;
 } else if ((i27 | 0) == 42) {
  i19 = i1 + 204 | 0;
  i20 = i2 + 204 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  HEAP32[i19 >> 2] = i21;
  i22 = i1 + 208 | 0;
  i23 = i2 + 208 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  HEAP32[i22 >> 2] = i24;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  i8 = __ZN3WTF10fastMallocEj(i9 << 4) | 0;
  if ((i9 | 0) > 0) {
   i11 = 0;
   while (1) {
    _memset(i8 + (i11 << 4) | 0, 0, 16) | 0;
    i11 = i11 + 1 | 0;
    if ((i11 | 0) >= (i9 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i8;
  do {
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 16 >> 2] = 0;
   } else {
    i8 = 0;
    while (1) {
     i9 = i8 << 4 | 0;
     i11 = HEAP32[i9 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i2, i9) | 0;
     }
     i8 = i8 + 1 | 0;
     if ((i8 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i2 + 16 >> 2] = 0;
    if ((i10 | 0) <= 0) {
     break;
    }
    _llvm_trap();
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(0);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i3 + 16 >> 2] | 0;
 if (i10 >>> 0 > 127 >>> 0) {
  i14 = i10 >>> 7;
 } else {
  i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i14 >>> 23) + ~i14 | 0;
 i10 = i3 << 12 ^ i3;
 i3 = i10 >>> 7 ^ i10;
 i10 = i3 << 2 ^ i3;
 i3 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i8 = i14;
 i14 = 0;
 while (1) {
  i9 = i8 & i6;
  i15 = i12 + (i9 << 4) | 0;
  i11 = HEAP32[i15 >> 2] | 0;
  i16 = i11;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i15;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i7 >> 2] | 0) | 0) {
    i18 = 21;
    break;
   } else {
    i17 = i10;
   }
  }
  i11 = (i14 | 0) == 0 ? i3 : i14;
  i10 = i17;
  i8 = i11 + i9 | 0;
  i14 = i11;
 }
 if ((i18 | 0) == 21) {
  i18 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
  i14 = i1;
  HEAP32[i14 >> 2] = i15;
  HEAP32[i14 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i19 = i15;
 } else {
  _memset(i10 | 0, 0, 16) | 0;
  i15 = i2 + 16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1;
  i19 = i10;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i15 = i10 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 i15 = i19 | 0;
 i18 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i10;
 do {
  if ((i18 | 0) != 0) {
   i10 = i18 | 0;
   i15 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i10 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEEaSERKS2_(i19 + 4 | 0, i4 + 4 | 0) | 0;
 i4 = i2 + 12 | 0;
 i18 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i18;
 i4 = i2 + 16 | 0;
 i15 = i2 + 4 | 0;
 i10 = HEAP32[i15 >> 2] | 0;
 if (((HEAP32[i4 >> 2] | 0) + i18 << 1 | 0) < (i10 | 0)) {
  i20 = i19;
  i21 = i10;
 } else {
  i14 = (i10 | 0) == 0;
  if (i14) {
   i22 = 8;
  } else {
   i8 = i10 << 1;
   i22 = (i18 * 6 & -1 | 0) < (i8 | 0) ? i10 : i8;
  }
  i8 = HEAP32[i5 >> 2] | 0;
  HEAP32[i15 >> 2] = i22;
  HEAP32[i13 >> 2] = i22 - 1;
  i13 = __ZN3WTF10fastMallocEj(i22 << 4) | 0;
  if ((i22 | 0) > 0) {
   i18 = 0;
   while (1) {
    _memset(i13 + (i18 << 4) | 0, 0, 16) | 0;
    i18 = i18 + 1 | 0;
    if ((i18 | 0) >= (i22 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i13;
  do {
   if (i14) {
    HEAP32[i4 >> 2] = 0;
    i23 = 0;
   } else {
    i13 = 0;
    i22 = 0;
    while (1) {
     i18 = i8 + (i13 << 4) | 0;
     i17 = HEAP32[i18 >> 2] | 0;
     if ((i17 | 0) == (-1 | 0) | (i17 | 0) == 0) {
      i24 = i22;
     } else {
      i17 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i2, i18) | 0;
      i24 = (i18 | 0) == (i19 | 0) ? i17 : i22;
     }
     i17 = i13 + 1 | 0;
     if ((i17 | 0) == (i10 | 0)) {
      break;
     } else {
      i13 = i17;
      i22 = i24;
     }
    }
    HEAP32[i4 >> 2] = 0;
    if ((i10 | 0) > 0) {
     i25 = 0;
    } else {
     i23 = i24;
     break;
    }
    while (1) {
     i22 = i8 + (i25 << 4) | 0;
     i13 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i13 | 0) != -1) {
       i17 = i8 + (i25 << 4) + 12 | 0;
       if ((HEAP32[i17 >> 2] | 0) != 0) {
        HEAP32[i17 >> 2] = 0;
       }
       i17 = i8 + (i25 << 4) + 4 | 0;
       i18 = HEAP32[i17 >> 2] | 0;
       if ((i18 | 0) == 0) {
        i26 = i13;
       } else {
        HEAP32[i17 >> 2] = 0;
        HEAP32[i8 + (i25 << 4) + 8 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i18);
        i26 = HEAP32[i22 >> 2] | 0;
       }
       if ((i26 | 0) == 0) {
        break;
       }
       i18 = i26 | 0;
       i17 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i26);
        break;
       } else {
        HEAP32[i18 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i22 = i25 + 1 | 0;
     if ((i22 | 0) < (i10 | 0)) {
      i25 = i22;
     } else {
      i23 = i24;
      break;
     }
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i8);
  i20 = i23;
  i21 = HEAP32[i15 >> 2] | 0;
 }
 i15 = (HEAP32[i5 >> 2] | 0) + (i21 << 4) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i15;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKS1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i3 + 16 >> 2] | 0;
 if (i11 >>> 0 > 127 >>> 0) {
  i13 = i11 >>> 7;
 } else {
  i13 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i13 >>> 23) + ~i13 | 0;
 i11 = i3 << 12 ^ i3;
 i3 = i11 >>> 7 ^ i11;
 i11 = i3 << 2 ^ i3;
 i3 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i9 = i13;
 i13 = 0;
 while (1) {
  i14 = i9 & i8;
  i15 = i12 + (i14 * 20 & -1) | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16;
  if ((i17 | 0) == (-1 | 0)) {
   i18 = i15;
  } else if ((i17 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i10 >> 2] | 0) | 0) {
    i19 = 11;
    break;
   } else {
    i18 = i11;
   }
  }
  i16 = (i13 | 0) == 0 ? i3 : i13;
  i11 = i18;
  i9 = i16 + i14 | 0;
  i13 = i16;
 }
 if ((i19 | 0) == 11) {
  i19 = (HEAP32[i7 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 20 & -1) | 0;
  i13 = i1;
  HEAP32[i13 >> 2] = i15;
  HEAP32[i13 + 4 >> 2] = i19;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i11 | 0) == 0) {
  i20 = i15;
 } else {
  i15 = i6;
  _llvm_lifetime_start(16, 0, i15 | 0);
  _memset(i15 | 0, 0, 16) | 0;
  HEAP32[i11 >> 2] = 0;
  i6 = i11 + 4 | 0;
  HEAP32[i6 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
  _llvm_lifetime_end(16, 0, i15 | 0);
  i15 = i2 + 16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1;
  i20 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i15 = i11 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 i15 = i20 | 0;
 i6 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i11;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i6 = i20 + 4 | 0;
 i15 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 i15 = i2 + 12 | 0;
 i6 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
 HEAP32[i15 >> 2] = i6;
 i15 = i2 + 4 | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i6 << 1 | 0) < (i4 | 0)) {
  i21 = i20;
  i22 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i23 = 8;
  } else {
   i11 = i4 << 1;
   i23 = (i6 * 6 & -1 | 0) < (i11 | 0) ? i4 : i11;
  }
  i11 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i23, i20) | 0;
  i21 = i11;
  i22 = HEAP32[i15 >> 2] | 0;
 }
 i15 = (HEAP32[i7 >> 2] | 0) + (i22 * 20 & -1) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i15;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = i2 - 1;
 i9 = __ZN3WTF10fastMallocEj(i2 * 20 & -1) | 0;
 if ((i2 | 0) > 0) {
  i10 = i4 | 0;
  i11 = 0;
  while (1) {
   _llvm_lifetime_start(16, 0, i10 | 0);
   _memset(i10 | 0, 0, 16) | 0;
   HEAP32[i9 + (i11 * 20 & -1) >> 2] = 0;
   i12 = i9 + (i11 * 20 & -1) + 4 | 0;
   HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i12 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i12 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   _llvm_lifetime_end(16, 0, i10 | 0);
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = i9;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i13 = 0;
  i14 = i8;
  __ZN3WTF8fastFreeEPv(i14);
  STACKTOP = i4;
  return i13 | 0;
 } else {
  i15 = 0;
  i16 = 0;
 }
 while (1) {
  i9 = i8 + (i15 * 20 & -1) | 0;
  i2 = i9 | 0;
  i11 = HEAP32[i2 >> 2] | 0;
  i10 = i11;
  if ((i10 | 0) == (-1 | 0) | (i10 | 0) == 0) {
   i17 = i16;
  } else {
   i10 = HEAP32[i7 >> 2] | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   i18 = HEAP32[i11 + 16 >> 2] | 0;
   if (i18 >>> 0 > 127 >>> 0) {
    i19 = i18 >>> 7;
   } else {
    i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i11) | 0;
   }
   i11 = (i19 >>> 23) + ~i19 | 0;
   i18 = i11 << 12 ^ i11;
   i11 = i18 >>> 7 ^ i18;
   i18 = i11 << 2 ^ i11;
   i11 = i18 >>> 20 ^ i18 | 1;
   i18 = i19;
   i20 = 0;
   i21 = 0;
   while (1) {
    i22 = i18 & i12;
    i23 = i10 + (i22 * 20 & -1) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == (-1 | 0)) {
     i26 = i23;
    } else if ((i25 | 0) == 0) {
     i27 = 12;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i24, HEAP32[i2 >> 2] | 0) | 0) {
      i28 = i23;
      break;
     } else {
      i26 = i21;
     }
    }
    i24 = (i20 | 0) == 0 ? i11 : i20;
    i18 = i24 + i22 | 0;
    i20 = i24;
    i21 = i26;
   }
   if ((i27 | 0) == 12) {
    i27 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   i20 = i28 | 0;
   i18 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i11 = i18 | 0;
     i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i11 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i20 >> 2] = i18;
   i18 = i28 + 4 | 0;
   i21 = i8 + (i15 * 20 & -1) + 4 | 0;
   HEAP32[i18 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
   i17 = (i9 | 0) == (i3 | 0) ? i28 : i16;
  }
  i21 = i15 + 1 | 0;
  if ((i21 | 0) == (i6 | 0)) {
   break;
  } else {
   i15 = i21;
   i16 = i17;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i29 = 0;
 } else {
  i13 = i17;
  i14 = i8;
  __ZN3WTF8fastFreeEPv(i14);
  STACKTOP = i4;
  return i13 | 0;
 }
 while (1) {
  i1 = HEAP32[i8 + (i29 * 20 & -1) >> 2] | 0;
  i16 = i1;
  do {
   if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
    i15 = i1 | 0;
    i28 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i28 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i15 >> 2] = i28;
     break;
    }
   }
  } while (0);
  i1 = i29 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i29 = i1;
  } else {
   i13 = i17;
   break;
  }
 }
 i14 = i8;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 << 4) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 6;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i14 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i14;
 }
 if ((i13 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 12 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i8 = i15 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i15 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i13);
 }
 i13 = i15 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i7 = i14 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i13 >> 2] = i14;
 HEAP32[i8 >> 2] = 0;
 i14 = i15 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 i13 = i2 + 12 | 0;
 HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = 0;
 i13 = i2 + 4 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = i10;
 i10 = i2 + 8 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   if (i8 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
   HEAP32[i7 >> 2] = i13 >>> 2;
   i8 = __ZN3WTF10fastMallocEj(i13) | 0;
   HEAP32[i11 >> 2] = i8;
   i13 = i10;
   _memcpy(i8 | 0, i13 | 0, i12 << 2) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i13);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i3 >> 2] << 2 | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 _memcpy((HEAP32[i2 >> 2] | 0) + (i4 << 2) | 0, (HEAP32[i9 >> 2] | 0) + (i4 << 2) | 0, (HEAP32[i5 >> 2] | 0) - i4 << 2) | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 return i1 | 0;
}
function __ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEC2ERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 76695844 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 56 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 56 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + (i2 * 56 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  i5 = i9 + 8 | 0;
  i7 = i8 + 8 | 0;
  i2 = i5;
  i6 = HEAP32[i7 >> 2] | 0;
  i3 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  HEAP32[i2 + 4 >> 2] = i3;
  if ((i6 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
  }
  HEAPF64[i9 + 16 >> 3] = +HEAPF64[i8 + 16 >> 3];
  HEAP32[i9 + 24 >> 2] = HEAP32[i8 + 24 >> 2];
  i5 = i9 + 32 | 0;
  i3 = i8 + 32 | 0;
  i6 = i5;
  i2 = HEAP32[i3 >> 2] | 0;
  i7 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[i6 + 4 >> 2] = i7;
  if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
  }
  HEAPF64[i9 + 40 >> 3] = +HEAPF64[i8 + 40 >> 3];
  HEAP32[i9 + 48 >> 2] = HEAP32[i8 + 48 >> 2];
  i5 = i8 + 56 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   break;
  } else {
   i8 = i5;
   i9 = i9 + 56 | 0;
  }
 }
 return;
}
function __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 HEAP32[i1 >> 2] = 0;
 i8 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP8[i5 + 4 | 0] = 0;
 i9 = i5 + 5 | 0;
 i10 = i2 & 255;
 HEAP8[i9] = i10;
 HEAP8[i5 + 6 | 0] = 0;
 i2 = i8;
 i11 = HEAP32[i4 >> 2] | 0;
 i12 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i11;
 HEAP32[i2 + 4 >> 2] = i12;
 if ((i11 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i8 | 0);
  i13 = HEAP8[i9] | 0;
 } else {
  i13 = i10;
 }
 HEAPF64[i1 + 16 >> 3] = +0;
 HEAP32[i1 + 24 >> 2] = 0;
 if (i13 << 24 >> 24 == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 }
 i5 = i1 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i7 + 4 | 0] = 0;
 i13 = i7 + 5 | 0;
 HEAP8[i13] = i10;
 HEAP8[i7 + 6 | 0] = 0;
 i9 = i5;
 i8 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i9 + 4 >> 2] = i12;
 if ((i8 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5 | 0);
  i14 = HEAP8[i13] | 0;
 } else {
  i14 = i10;
 }
 HEAPF64[i1 + 40 >> 3] = +0;
 HEAP32[i1 + 48 >> 2] = 0;
 if (i14 << 24 >> 24 != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
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
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore13StyleGridDataC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 _memset(i1 + 4 | 0, 0, 68) | 0;
 __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i1 + 72 | 0, 0);
 __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i1 + 128 | 0, 0);
 _memset(i1 + 184 | 0, 0, 28) | 0;
 return;
}
function __ZN7WebCore13StyleGridDataC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 _memset(i1 + 4 | 0, 0, 68) | 0;
 __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i1 + 72 | 0, 0);
 __ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE(i1 + 128 | 0, 0);
 _memset(i1 + 184 | 0, 0, 28) | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore13StyleGridData4copyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(216) | 0;
 __ZN7WebCore13StyleGridDataC2ERKS0_(i3, i2);
 HEAP32[i1 >> 2] = i3;
 return;
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore13StyleGridDataC2Ev,b3];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKS1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore13GridTrackSizeC2ENS_10LengthTypeE","_memmove","__ZN7WebCore13StyleGridDataC2Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKS1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","_memset","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_","_memcpy","_strlen","__ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEEaSERKS2_","__ZNK7WebCore13StyleGridData4copyEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore14GridCoordinateEEENS_24KeyValuePairKeyExtractorIS5_EENS_10StringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_","__ZN3WTF6VectorIN7WebCore13GridTrackSizeELj0ENS_15CrashOnOverflowEEC2ERKS4_","__ZN7WebCore13StyleGridDataC2ERKS0_"]
