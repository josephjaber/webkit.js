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
H_BASE = parentModule["_malloc"](16 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 16;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
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
  var __ZN7WebCore23JSWebGLRenderingContext6s_infoE=env.__ZN7WebCore23JSWebGLRenderingContext6s_infoE|0;
  var __ZN7WebCore26JSCanvasRenderingContext2D6s_infoE=env.__ZN7WebCore26JSCanvasRenderingContext2D6s_infoE|0;
  var __ZTVN7WebCore29JSCanvasRenderingContextOwnerE=env.__ZTVN7WebCore29JSCanvasRenderingContextOwnerE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_22CanvasRenderingContextEE29jsCanvasRenderingContextOwner=(H_BASE+8)|0;
  var __ZGVZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_22CanvasRenderingContextEE29jsCanvasRenderingContextOwner=(H_BASE+16)|0;
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
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_22CanvasRenderingContextE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 1](i4) | 0) {
  i10 = i4;
  i11 = i2 + 16 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
  do {
   if ((HEAP8[i13 + 92 | 0] & 1) == 0) {
    i14 = 9;
   } else {
    i15 = HEAP32[i4 + 4 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i14 = 9;
     break;
    }
    if ((HEAP32[i15 + 8 >> 2] & 3 | 0) != 0) {
     i14 = 9;
     break;
    }
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i14 = 9;
     break;
    }
    i17 = i16 | 0;
   }
  } while (0);
  if ((i14 | 0) == 9) {
   HEAP32[i8 >> 2] = i4;
   i17 = __ZNK3WTF7HashMapIPvN3JSC4WeakINS2_8JSObjectEEENS_7PtrHashIS1_EENS_10HashTraitsIS1_EENS8_IS5_EEE3getERKS1_(i13 + 4 | 0, i8) | 0;
  }
  if ((i17 | 0) != 0) {
   HEAP32[i1 + 4 >> 2] = -5;
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i5;
   return;
  }
  i17 = __ZN7WebCore15getDOMStructureINS_23JSWebGLRenderingContextEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(i12 & -65536) + 1076 >> 2] | 0, i3) | 0;
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = i10;
  i8 = (HEAP32[i4 + 8 >> 2] | 0) + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = __ZN7WebCore23JSWebGLRenderingContext6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21WebGLRenderingContextEEE(i17, i3, i6) | 0;
  i6 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i12 = (HEAP32[i6 + 8 >> 2] | 0) + 8 | 0;
    i17 = i12 | 0;
    i13 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    HEAP32[i17 >> 2] = i13;
    if ((i13 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   }
  } while (0);
  __ZN7WebCore12cacheWrapperINS_21WebGLRenderingContextENS_23JSWebGLRenderingContextEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i11 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i10, i8);
  HEAP32[i1 + 4 >> 2] = (i8 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i5;
  return;
 } else {
  i8 = i4;
  i10 = i2 + 16 | 0;
  i2 = HEAP32[i10 >> 2] | 0;
  i11 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
  do {
   if ((HEAP8[i11 + 92 | 0] & 1) == 0) {
    i14 = 22;
   } else {
    i6 = HEAP32[i4 + 4 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i14 = 22;
     break;
    }
    if ((HEAP32[i6 + 8 >> 2] & 3 | 0) != 0) {
     i14 = 22;
     break;
    }
    i12 = HEAP32[i6 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i14 = 22;
     break;
    }
    i18 = i12 | 0;
   }
  } while (0);
  if ((i14 | 0) == 22) {
   HEAP32[i9 >> 2] = i4;
   i18 = __ZNK3WTF7HashMapIPvN3JSC4WeakINS2_8JSObjectEEENS_7PtrHashIS1_EENS_10HashTraitsIS1_EENS8_IS5_EEE3getERKS1_(i11 + 4 | 0, i9) | 0;
  }
  if ((i18 | 0) != 0) {
   HEAP32[i1 + 4 >> 2] = -5;
   HEAP32[i1 >> 2] = i18;
   STACKTOP = i5;
   return;
  }
  i18 = __ZN7WebCore15getDOMStructureINS_26JSCanvasRenderingContext2DEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(i2 & -65536) + 1076 >> 2] | 0, i3) | 0;
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = i8;
  i9 = (HEAP32[i4 + 8 >> 2] | 0) + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = __ZN7WebCore26JSCanvasRenderingContext2D6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24CanvasRenderingContext2DEEE(i18, i3, i7) | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i2 = (HEAP32[i7 + 8 >> 2] | 0) + 8 | 0;
    i3 = i2 | 0;
    i18 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    HEAP32[i3 >> 2] = i18;
    if ((i18 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
   }
  } while (0);
  __ZN7WebCore12cacheWrapperINS_24CanvasRenderingContext2DENS_26JSCanvasRenderingContext2DEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i10 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i8, i9);
  HEAP32[i1 + 4 >> 2] = (i9 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
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
  __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i9 & i8;
 i13 = i12 + (i11 << 3) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = i10;
  } else {
   i17 = (i9 >>> 23) + ~i9 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i11;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i23 = 8;
     break;
    }
    i24 = (i22 | 0) == -1 ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i17 : i18;
    i26 = i25 + i20 & i8;
    i27 = i12 + (i26 << 3) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i23 = 10;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i28;
    }
   }
   if ((i23 | 0) == 8) {
    i22 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i23 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i15 = i27;
     i16 = i10;
     break;
    }
    i22 = i24;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i15 = i24;
    i16 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 i16 = i6 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i15 + 4 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 HEAP32[i16 >> 2] = i3;
 if ((i3 | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
 }
 i16 = i2 + 12 | 0;
 i3 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i3;
 i16 = i2 + 4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i4 | 0)) {
  i29 = i15;
  i30 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i31 = 8;
  } else {
   i6 = i4 << 1;
   i31 = (i3 * 6 & -1 | 0) < (i6 | 0) ? i4 : i6;
  }
  i6 = __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i15) | 0;
  i29 = i6;
  i30 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = i7 + (i37 << 3) + 4 | 0;
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     break;
    }
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore12cacheWrapperINS_24CanvasRenderingContext2DENS_26JSCanvasRenderingContext2DEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore29JSCanvasRenderingContextOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i11;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_21WebGLRenderingContextENS_23JSWebGLRenderingContextEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i10 = __Znwj(4) | 0;
  i11 = i10;
  HEAP32[i10 >> 2] = __ZTVN7WebCore29JSCanvasRenderingContextOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i11;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i12 = i11;
 } else {
  i12 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 i11 = (i2 | 0) == 0 ? 0 : i2 + 4 | 0;
 if ((HEAP8[i1 + 92 | 0] & 1) != 0) {
  if ((i3 | 0) == 0) {
   i13 = 0;
  } else {
   i10 = i3;
   i14 = (i10 & -65536) + 1060 | 0;
   i15 = i14 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = __ZN3JSC7WeakSet13findAllocatorEv(i14) | 0;
   } else {
    i17 = i16;
   }
   HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
   i15 = i17;
   HEAP32[i15 >> 2] = i10;
   HEAP32[i15 + 4 >> 2] = -5;
   HEAP32[i17 + 8 >> 2] = i12;
   HEAP32[i17 + 12 >> 2] = i1;
   i13 = i17;
  }
  i17 = i7 | 0;
  i7 = i11 | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i17 >> 2] = i11;
  if ((i11 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = i2;
 i2 = i9 | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
 } else {
  i17 = i3;
  i3 = (i17 & -65536) + 1060 | 0;
  i11 = i3 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i19 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i19 = i13;
  }
  HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
  i11 = i19;
  HEAP32[i11 >> 2] = i17;
  HEAP32[i11 + 4 >> 2] = -5;
  HEAP32[i19 + 8 >> 2] = i12;
  HEAP32[i19 + 12 >> 2] = i1;
  i18 = i19;
 }
 HEAP32[i2 >> 2] = i18;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i8, i9);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i9 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i18 = i9 + 4 | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i1;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i8);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  i13 = __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore24JSCanvasRenderingContext13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN3JSC8JSObject13visitChildrenEPNS_6JSCellERNS_11SlotVisitorE(i1, i2);
 i6 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 8 >> 2] | 0;
 i1 = HEAP32[i6 + 12 >> 2] | 0;
 if ((i1 & 256 | 0) == 0) {
  i7 = i6 | 0;
  i8 = i1;
  while (1) {
   i1 = (i8 & 4096 | 0) == 0;
   do {
    if (i1) {
     i9 = 7;
    } else {
     if ((HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i7 | 0)) {
      i9 = 7;
      break;
     }
     i10 = HEAP32[i7 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i9 | 0) == 7) {
    i9 = 0;
    i10 = HEAP32[i7 + 16 >> 2] | 0;
   }
   if ((i10 | 0) == 0) {
    break;
   }
   do {
    if (i1) {
     i9 = 12;
    } else {
     if ((HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i7 | 0)) {
      i9 = 12;
      break;
     }
     i11 = HEAP32[i7 + 92 >> 2] | 0;
    }
   } while (0);
   if ((i9 | 0) == 12) {
    i9 = 0;
    i11 = HEAP32[i7 + 16 >> 2] | 0;
   }
   i7 = i11 | 0;
   i8 = HEAP32[i11 + 12 >> 2] | 0;
  }
  i12 = i7;
 } else {
  i12 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0;
 }
 HEAP32[i4 >> 2] = i12;
 __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_(i5, i2 + 20 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZNK3WTF7HashMapIPvN3JSC4WeakINS2_8JSObjectEEENS_7PtrHashIS1_EENS_10HashTraitsIS1_EENS8_IS5_EEE3getERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = i1;
 i5 = i2 + ~(i2 << 15) | 0;
 i2 = (i5 >>> 10 ^ i5) * 9 & -1;
 i5 = i2 >>> 6 ^ i2;
 i2 = i5 + ~(i5 << 11) | 0;
 i5 = i2 >>> 16 ^ i2;
 if ((i4 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i2 = i5 & i3;
 i7 = i4 + (i2 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L4 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i5 >>> 23) + ~i5 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i2;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i6 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i3;
    i16 = i4 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break L4;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i6 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = HEAP32[i9 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] & 3 | 0) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = HEAP32[i1 >> 2] | 0;
 return i6 | 0;
}
function __ZN7WebCore15getDOMStructureINS_26JSCanvasRenderingContext2DEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore26JSCanvasRenderingContext2D6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore26JSCanvasRenderingContext2D15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore26JSCanvasRenderingContext2D6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore26JSCanvasRenderingContext2D6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_23JSWebGLRenderingContextEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore23JSWebGLRenderingContext6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore23JSWebGLRenderingContext15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = -32;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore23JSWebGLRenderingContext6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore23JSWebGLRenderingContext6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore26JSCanvasRenderingContext2D6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24CanvasRenderingContext2DEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore26JSCanvasRenderingContext2DC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24CanvasRenderingContext2DEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = (HEAP32[i5 + 8 >> 2] | 0) + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore26JSCanvasRenderingContext2D14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore23JSWebGLRenderingContext6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21WebGLRenderingContextEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore23JSWebGLRenderingContextC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21WebGLRenderingContextEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = (HEAP32[i5 + 8 >> 2] | 0) + 8 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore23JSWebGLRenderingContext14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
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
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore23JSWebGLRenderingContext6s_infoE": __ZN7WebCore23JSWebGLRenderingContext6s_infoE, "__ZN7WebCore26JSCanvasRenderingContext2D6s_infoE": __ZN7WebCore26JSCanvasRenderingContext2D6s_infoE, "__ZTVN7WebCore29JSCanvasRenderingContextOwnerE": __ZTVN7WebCore29JSCanvasRenderingContextOwnerE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_22CanvasRenderingContextE","__ZN7WebCore15getDOMStructureINS_26JSCanvasRenderingContext2DEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_","__ZN7WebCore12cacheWrapperINS_21WebGLRenderingContextENS_23JSWebGLRenderingContextEEEvRNS_15DOMWrapperWorldEPT_PT0_","_memset","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZNK3WTF7HashMapIPvN3JSC4WeakINS2_8JSObjectEEENS_7PtrHashIS1_EENS_10HashTraitsIS1_EENS8_IS5_EEE3getERKS1_","_memcpy","__ZN7WebCore12cacheWrapperINS_24CanvasRenderingContext2DENS_26JSCanvasRenderingContext2DEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_23JSWebGLRenderingContextEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_","__ZN7WebCore26JSCanvasRenderingContext2D6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_24CanvasRenderingContext2DEEE","__ZN7WebCore23JSWebGLRenderingContext6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_21WebGLRenderingContextEEE","__ZN7WebCore24JSCanvasRenderingContext13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE"]
