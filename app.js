// --- State ---
const state = {
  pose: '2',
  poseMode: 'preset',
  characterSize: 'bust',
  layout: 'char-left',
  aspectRatio: '16:9',
  title: '知らなきゃ損！\nサムネデザイン\n攻略法',
  titleAlign: 'left',
  titleColor: '#000000',
  titleSize: 'L',
  titleDirection: 'horizontal',
  subtitle1: '初心者でもプロ級の仕上がりに',
  subtitle1Align: 'left',
  subtitle1Color: '#000000',
  subtitle1Size: 'L',
  subtitle1Direction: 'vertical',
  subtitle1FontFamily: 'gothic',
  subtitle1FontWeight: '700',
  subtitle2: '今日から使えるテクニック集',
  subtitle2Align: 'left',
  subtitle2Color: '#000000',
  subtitle2Size: 'L',
  subtitle2Direction: 'horizontal',
  subtitle2FontFamily: 'gothic',
  subtitle2FontWeight: '400',
  bandEnabled: true,
  bandType: 'vertical',
  bandPosition: 'left',
  bandColor: '#000000',
  bandTextColor: '#ffffff',
  titleFontFamily: 'gothic',
  titleFontWeight: '900',
  bgType: 'solid',
  bgColor: '#ffffff',
  gradientColor2: '#0f3460',
  gradientColor3: '#ffffff',
  useGradColor3: false,
  gradientDirection: 'to-bottom',
  activePreset: 'p1',
  activeGradPreset: null,
  refEnabled: false,
  refMode: 'character',
  refTextTarget: 'title',
  refRelDir: 'right',
  titleStroke: false,
  titleStrokeColor: '#ffffff',
  titleStrokeWidth: 2,
  subtitle1Stroke: false,
  subtitle1StrokeColor: '#ffffff',
  subtitle1StrokeWidth: 1.5,
  subtitle2Stroke: false,
  subtitle2StrokeColor: '#ffffff',
  subtitle2StrokeWidth: 1.5,
  bgScene: 'cafe',
  textGradient: null,
  titleGold: false,
  subtitle1Gold: false,
  subtitle2Gold: false,

  subtitlePosition: 'bottom',
  poseAction: '',
};

// --- Data ---
const POSES = {
  '1': { name: '筆記', nameJa: 'デスクでペンとノートに書いているポーズ', file: '筆記' },
  '2': { name: '正面', nameJa: '正面ポーズ', file: '正面' },
  '3': { name: 'PC作業', nameJa: 'パソコン操作ポーズ', file: 'PC作業' },
  '4': { name: '指差し', nameJa: '指差しポーズ', file: '指差し' },
  '5': { name: '腕組み', nameJa: '腕組みポーズ', file: '腕組み' },
  '6': { name: '挨拶', nameJa: '手を振って挨拶しているポーズ', file: '挨拶' },
};
const LAYOUTS = {
  'char-left':   { name: '右テキスト', descJa: '画像左・テキスト右' },
  'char-right':  { name: '左テキスト', descJa: 'テキスト左・画像右' },
  'text-top':    { name: '上テキスト', descJa: 'テキスト上部・画像下部' },
  'text-bottom': { name: '下テキスト', descJa: '画像上部・テキスト下部' },
  'text-only':   { name: '全面テキスト', descJa: '中央大テキストのみ（画像なし）' },
};
const PRESETS = {
  // モノクロ系
  'p1':  { name: '白×黒', bg: '#ffffff', fg: '#000000' },
  'p2':  { name: '黒×白', bg: '#000000', fg: '#ffffff' },
  'p3':  { name: '薄灰×黒', bg: '#dddddd', fg: '#333333' },
  // ゴールド
  'p4':  { name: '黒×金', bg: '#1a1a1a', fg: '#D4AF37', fgGrad: 'linear-gradient(180deg, #F5E6A3 0%, #D4AF37 30%, #B8860B 60%, #F5E6A3 100%)' },
  'p5':  { name: '紺×金', bg: '#1B2845', fg: '#C5A43C', fgGrad: 'linear-gradient(180deg, #F0DC82 0%, #C5A43C 30%, #8B6914 60%, #F0DC82 100%)' },
  // コーポレートカラー
  'p6':  { name: '白×赤', bg: '#FFFFFF', fg: '#FF0000' },
  'p7':  { name: '黄×黒', bg: '#FDD000', fg: '#000000' },
  'p8':  { name: '白×深緑', bg: '#FFFFFF', fg: '#00704A' },
  'p9':  { name: '赤×黄', bg: '#DA291C', fg: '#FDD000' },
  'p10': { name: '緑×白', bg: '#06C755', fg: '#FFFFFF' },
  'p11': { name: '青×黄', bg: '#0058A3', fg: '#FFDB00' },
  'p12': { name: '青×白', bg: '#0068B7', fg: '#FFFFFF' },
  'p13': { name: '白×青', bg: '#FFFFFF', fg: '#0068B7' },
  'p14': { name: 'ミント×白', bg: '#0ABAB5', fg: '#FFFFFF' },
  'p15': { name: '赤×白', bg: '#F40009', fg: '#FFFFFF' },
  'p16': { name: '黒×赤', bg: '#000000', fg: '#E50914' },
  'p17': { name: '黒×緑', bg: '#191414', fg: '#1DB954' },
  'p18': { name: '紫×白', bg: '#A435F0', fg: '#FFFFFF' },
};
const GOLD_GRADIENT = 'linear-gradient(180deg, #F5E6A3 0%, #D4AF37 30%, #B8860B 60%, #F5E6A3 100%)';
const GRAD_PRESETS = {
  'instagram':  { name: 'Instagram', c1: '#833ab4', c2: '#fd1d1d', c3: '#fcb045', dir: 'to-br', fg: '#ffffff' },
  'canva':      { name: 'Canva', c1: '#00c4cc', c2: '#7d2ae8', dir: 'to-right', fg: '#ffffff' },
  'sunset':     { name: 'サンセット', c1: '#ff512f', c2: '#f09819', c3: '#ffd700', dir: 'to-right', fg: '#ffffff' },
  'ocean':      { name: 'オーシャン', c1: '#2193b0', c2: '#6dd5ed', dir: 'to-right', fg: '#111111' },
  'midnight':   { name: 'ミッドナイト', c1: '#0f0c29', c2: '#302b63', dir: 'to-br', fg: '#e0e0e0' },
  'emerald':    { name: 'エメラルド', c1: '#11998e', c2: '#38ef7d', dir: 'to-right', fg: '#111111' },
  'flame':      { name: 'フレイム', c1: '#f12711', c2: '#f5af19', c3: '#ffd700', dir: 'to-right', fg: '#ffffff' },
  'mono':       { name: 'モノクローム', c1: '#232526', c2: '#414345', dir: 'to-bottom', fg: '#e0e0e0' },
  'gold':       { name: 'ゴールド', c1: '#A18838', c2: '#DDBD74', c3: '#BF9A54', dir: 'to-right', fg: '#111111' },
};
const FONT_FAMILIES = {
  gothic: { name: 'ゴシック体', css: "'Noto Sans JP', sans-serif" },
  mincho: { name: '明朝体', css: "'Noto Serif JP', serif" },
};
const FONT_WEIGHTS = { '300': '細字', '400': '標準', '700': '太字', '900': '極太' };
const FONT_SIZES = {
  S: { name: '小', scale: 0.75 }, M: { name: '中', scale: 1.0 },
  L: { name: '大', scale: 1.3 }, XL: { name: '特大', scale: 1.6 },
};
const TITLE_PX = {
  'char-left': { S: 32, M: 48, L: 64, XL: 84 },
  'char-right': { S: 32, M: 48, L: 64, XL: 84 },
  'text-top': { S: 40, M: 60, L: 80, XL: 104 },
  'text-bottom': { S: 40, M: 60, L: 80, XL: 104 },
  'text-only': { S: 48, M: 72, L: 96, XL: 128 },
};
const SUBTITLE_PX = {
  'char-left': { S: 16, M: 24, L: 32, XL: 40 },
  'char-right': { S: 16, M: 24, L: 32, XL: 40 },
  'text-top': { S: 18, M: 30, L: 38, XL: 48 },
  'text-bottom': { S: 18, M: 30, L: 38, XL: 48 },
  'text-only': { S: 22, M: 36, L: 46, XL: 56 },
};
const GRAD_DIRS = {
  'to-bottom': { name: '↓', css: 'to bottom', ja: '上から下' },
  'to-right': { name: '→', css: 'to right', ja: '左から右' },
  'to-br': { name: '↘', css: 'to bottom right', ja: '左上から右下' },
  'to-bl': { name: '↙', css: 'to bottom left', ja: '右上から左下' },
};
const BAND_POS = {
  horizontal: [{ v: 'top', n: '上' }, { v: 'bottom', n: '下' }],
  vertical: [{ v: 'left', n: '左' }, { v: 'right', n: '右' }],
};
const CHAR_SIZES = {
  'bust': { name: 'バストアップ', ja: 'バストアップ（上半身）' },
  'full': { name: '全身', ja: '全身' },
};
const SCENES = {
  'cafe': { name: 'カフェ', ja: '温かみのあるカフェの室内。木のテーブル、観葉植物、ペンダントライト。柔らかい自然光。背景ぼかし', color: '#8B6F47', img: 'assets/background_cafe.png' },
  'office-night': { name: '夜オフィス', ja: '夜のオフィス。デスクライトの温かい光とモニターのクールな光。窓の外は夜景。背景ぼかし', color: '#1a1a2e', img: 'assets/background_night_office.png' },
  'nature': { name: '自然', ja: '緑豊かな自然の中。柔らかい木漏れ日。浅い被写界深度で背景ぼかし', color: '#2d5016', img: 'assets/background_nature_green.png' },
  'bookshelf': { name: '書斎', ja: '本棚の前。知的な雰囲気。暖色系の照明。背景ぼかし', color: '#5C4033', img: 'assets/background_study_room.png' },
  'blue-sky': { name: '青空', ja: '澄んだ青空。明るく爽やかな背景', color: '#87CEEB', img: 'assets/background_blue_sky.png', crop: 'top' },
};

const CHAR_HEIGHTS = {
  'char-left': { bust: '80%', full: '90%' },
  'char-right': { bust: '80%', full: '90%' },
  'text-top': { bust: '48%', full: '55%' },
  'text-bottom': { bust: '48%', full: '55%' },
};
const LAYOUT_FONT_BASE = {
  'char-left': { t: 'clamp(16px,3vw,32px)', s: 'clamp(10px,1.5vw,16px)' },
  'char-right': { t: 'clamp(16px,3vw,32px)', s: 'clamp(10px,1.5vw,16px)' },
  'text-top': { t: 'clamp(20px,4vw,42px)', s: 'clamp(12px,2vw,20px)' },
  'text-bottom': { t: 'clamp(20px,4vw,42px)', s: 'clamp(12px,2vw,20px)' },
  'text-only': { t: 'clamp(24px,5vw,52px)', s: 'clamp(14px,2.5vw,24px)' },
};
const CHAR_REL_POS = {
  'char-left':   { above: 'top-left',    below: 'bottom-left',   left: 'middle-left', right: 'center' },
  'char-right':  { above: 'top-right',   below: 'bottom-right',  left: 'center',      right: 'middle-right' },
  'text-top':    { above: 'top-center',  below: 'bottom-center', left: 'bottom-left', right: 'bottom-right' },
  'text-bottom': { above: 'top-center',  below: 'bottom-center', left: 'top-left',    right: 'top-right' },
};
const TEXT_REL_POS = {
  'char-left':   { above: 'top-right',   below: 'bottom-right',  left: 'center',       right: 'middle-right' },
  'char-right':  { above: 'top-left',    below: 'bottom-left',   left: 'middle-left',  right: 'center' },
  'text-top':    { above: 'top-center',  below: 'center',        left: 'top-left',     right: 'top-right' },
  'text-bottom': { above: 'center',      below: 'bottom-center', left: 'bottom-left',  right: 'bottom-right' },
  'text-only':   { above: 'top-center',  below: 'bottom-center', left: 'middle-left',  right: 'middle-right' },
};

// --- DOM ---
const $ = id => document.getElementById(id);
const poseGrid = $('poseGrid');
const charSizeGroup = $('charSize');
const layoutGrid = $('layoutGrid');
const previewContainer = $('previewContainer');
const previewCharacter = $('previewCharacter');
const previewRef = $('previewRef');
const previewRefWrap = $('previewRefWrap');
const previewBand = $('previewBand');
const previewBandText = $('previewBandText');
const previewTitle = $('previewTitle');
const previewSub1 = $('previewSub1');
const previewSub2 = $('previewSub2');
const previewTextArea = $('previewTextArea');
const previewSubsGroup = $('previewSubsGroup');
const subtitlePosGroup = $('subtitlePosition');
const titleInput = $('titleInput');
const sub1Input = $('sub1Input');
const sub2Input = $('sub2Input');
const titleAlignGroup = $('titleAlign');
const sub1AlignGroup = $('sub1Align');
const sub2AlignGroup = $('sub2Align');
const titleDirGroup = $('titleDir');
const sub1DirGroup = $('sub1Dir');
const sub2DirGroup = $('sub2Dir');
const bandModeGroup = $('bandMode');
const bandSettings = $('bandSettings');
const bandPosGroup = $('bandPos');
const bandColorPicker = $('bandColorPicker');
const bandColorHex = $('bandColorHex');
const titleFontFamilyGroup = $('titleFontFamily');
const titleFontWeightGroup = $('titleFontWeight');
const titleSizeGroup = $('titleSize');
const sub1FontFamilyGroup = $('sub1FontFamily');
const sub1FontWeightGroup = $('sub1FontWeight');
const sub1SizeGroup = $('sub1Size');
const sub2FontFamilyGroup = $('sub2FontFamily');
const sub2FontWeightGroup = $('sub2FontWeight');
const sub2SizeGroup = $('sub2Size');
const titleSizeInfo = $('titleSizeInfo');
const sub1SizeInfo = $('sub1SizeInfo');
const sub2SizeInfo = $('sub2SizeInfo');
const titleColorPicker = $('titleColorPicker');
const titleColorHex = $('titleColorHex');
const sub1ColorPicker = $('sub1ColorPicker');
const sub1ColorHex = $('sub1ColorHex');
const sub2ColorPicker = $('sub2ColorPicker');
const sub2ColorHex = $('sub2ColorHex');
const aspectRatioGrid = $('aspectRatioGrid');
const bgTypeGroup = $('bgType');
const solidControls = $('solidControls');
const gradControls = $('gradControls');
const colorPresetGrid = $('colorPresetGrid');
const gradPresetGrid = $('gradPresetGrid');
const bgColorPicker = $('bgColorPicker');
const bgColorHex = $('bgColorHex');
const gradC1Picker = $('gradC1Picker');
const gradC1Hex = $('gradC1Hex');
const gradC2Picker = $('gradC2Picker');
const gradC2Hex = $('gradC2Hex');
const gradC3Picker = $('gradC3Picker');
const gradC3Hex = $('gradC3Hex');
const gradC3Row = $('gradC3Row');
const gradColor3Toggle = $('gradColor3Toggle');
const gradDirGroup = $('gradDir');
const promptOutput = $('promptOutput');
const copyBtn = $('copyBtn');
const toast = $('toast');
const refToggle = $('refToggle');
const refSettings = $('refSettings');
const refModeGroup = $('refMode');
const refTextTargetRow = $('refTextTargetRow');
const refTextTargetGroup = $('refTextTarget');
const refRelDirRow = $('refRelDirRow');
const refRelDirGroup = $('refRelDir');
const titleGoldBtn = $('titleGold');
const sub1GoldBtn = $('sub1Gold');
const sub2GoldBtn = $('sub2Gold');
const titleStrokeBtn = $('titleStroke');
const titleStrokeColorPicker = $('titleStrokeColor');
const sub1StrokeBtn = $('sub1Stroke');
const sub1StrokeColorPicker = $('sub1StrokeColor');
const sub2StrokeBtn = $('sub2Stroke');
const sub2StrokeColorPicker = $('sub2StrokeColor');
const titleStrokeWidthSlider = $('titleStrokeWidth');
const titleStrokeWidthLabel = $('titleStrokeWidthLabel');
const sub1StrokeWidthSlider = $('sub1StrokeWidth');
const sub1StrokeWidthLabel = $('sub1StrokeWidthLabel');
const sub2StrokeWidthSlider = $('sub2StrokeWidth');
const sub2StrokeWidthLabel = $('sub2StrokeWidthLabel');
const sceneControls = $('sceneControls');
const sceneTypeGroup = $('sceneType');
const poseActionInput = $('poseAction');

// --- Helpers ---
function getImagePath(p, size) {
  const s = size || state.characterSize;
  const suffix = s === 'bust' ? '上半身' : '全身';
  return `assets/poses/${POSES[p].file}_${suffix}.png`;
}
let toastTimer = null;
function showToast(msg, cta) {
  toast.innerHTML = msg + (cta || '');
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}
function createConfetti() {
  const colors = ['#008080', '#F5E6A3', '#D4AF37', '#ff6b6b', '#51cf66', '#339af0', '#fcc419', '#ff922b', '#e64980', '#7950f2'];
  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2001;overflow:hidden;';
  document.body.appendChild(container);
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    const x = 50 + (Math.random() - 0.5) * 10;
    const w = 5 + Math.random() * 7;
    const h = w * (0.4 + Math.random() * 0.6);
    const rot = Math.random() * 360;
    const tx = (Math.random() - 0.5) * 400;
    const ty = -100 - Math.random() * 200;
    const dur = 700 + Math.random() * 600;
    p.style.cssText = `position:absolute;top:50%;left:${x}%;width:${w}px;height:${h}px;background:${colors[i % colors.length]};border-radius:${Math.random() > 0.5 ? '50%' : '2px'};`;
    container.appendChild(p);
    p.animate([
      { transform: 'translate(-50%,-50%) rotate(0deg)', opacity: 1 },
      { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) rotate(${rot + 360}deg)`, opacity: 0 }
    ], { duration: dur, easing: 'cubic-bezier(.15,.6,.35,1)', fill: 'forwards' });
  }
  setTimeout(() => container.remove(), 1500);
}
function setActive(container, sel, el) {
  container.querySelectorAll(sel).forEach(e => e.classList.remove('active'));
  el.classList.add('active');
}
function contrastShadow(hex) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.5 ? '0 1px 3px rgba(0,0,0,.8),0 0 6px rgba(0,0,0,.4)' : '0 1px 3px rgba(255,255,255,.8),0 0 6px rgba(255,255,255,.4)';
}
function contrastStrokeColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5 ? '#000000' : '#ffffff';
}
function syncStrokeColors() {
  if (state.titleStroke) {
    state.titleStrokeColor = contrastStrokeColor(state.titleColor);
    titleStrokeColorPicker.value = state.titleStrokeColor;
  }
  if (state.subtitle1Stroke) {
    state.subtitle1StrokeColor = contrastStrokeColor(state.subtitle1Color);
    sub1StrokeColorPicker.value = state.subtitle1StrokeColor;
  }
  if (state.subtitle2Stroke) {
    state.subtitle2StrokeColor = contrastStrokeColor(state.subtitle2Color);
    sub2StrokeColorPicker.value = state.subtitle2StrokeColor;
  }
}

// --- Dynamic UI Builders ---
function buildBandPosUI() {
  const items = BAND_POS[state.bandType];
  if (!items) return;
  bandPosGroup.innerHTML = items.map(p =>
    `<button class="toggle-btn${state.bandPosition === p.v ? ' active' : ''}" data-value="${p.v}">${p.n}</button>`
  ).join('');
}
// --- Update Functions ---
function updatePreview() {
  previewContainer.className = 'preview-container layout-' + state.layout;
  // Character
  previewCharacter.src = getImagePath(state.pose);
  const isTextOnly = state.layout === 'text-only';
  previewCharacter.style.display = isTextOnly ? 'none' : 'block';
  if (!isTextOnly && CHAR_HEIGHTS[state.layout]) {
    let charH = parseFloat(CHAR_HEIGHTS[state.layout][state.characterSize]) || 80;
    // Scale down for square/portrait aspect ratios
    const [aw, ah] = state.aspectRatio.split(':').map(Number);
    if (ah >= aw) {
      charH *= Math.max(0.7, (aw / ah) / (16 / 9));
    }
    // Scale down for desk poses (筆記, PC作業)
    const isDeskPose = state.pose === '1' || state.pose === '3';
    if (isDeskPose) {
      charH *= 0.7;
    }
    // Scale down bust-up for 指差し, 腕組み, 挨拶
    const isBustSmaller = (state.pose === '4' || state.pose === '5' || state.pose === '6') && state.characterSize === 'bust';
    if (isBustSmaller) {
      charH *= 0.9;
    }
    previewCharacter.style.height = `${charH}%`;
    // Reset pose-specific inline overrides
    previewCharacter.style.top = '';
    previewCharacter.style.bottom = '';
    previewCharacter.style.transform = '';
    previewCharacter.style.left = '';
    previewCharacter.style.right = '';
    // Desk poses: center vertically, stick to edge (respecting band position)
    if (isDeskPose && (state.layout === 'char-left' || state.layout === 'char-right')) {
      previewCharacter.style.bottom = 'auto';
      previewCharacter.style.top = '50%';
      previewCharacter.style.transform = 'translateY(-50%)';
      if (state.layout === 'char-left') {
        const bandLeft = state.bandEnabled && state.bandType === 'vertical' && state.bandPosition === 'left';
        previewCharacter.style.left = bandLeft ? 'calc(14% + 4px)' : '4px';
      } else {
        const bandRight = state.bandEnabled && state.bandType === 'vertical' && state.bandPosition === 'right';
        previewCharacter.style.right = bandRight ? 'calc(14% + 4px)' : '4px';
      }
    }
  }
  // Background
  if (state.bgType === 'scene') {
    const scene = SCENES[state.bgScene];
    if (scene?.img) {
      const pos = scene.crop === 'top' ? 'center top' : 'center center';
      previewContainer.style.background = `url('${scene.img}') ${pos} / cover no-repeat`;
    } else {
      previewContainer.style.background = '';
      previewContainer.style.backgroundColor = scene?.color || '#666';
    }
  } else if (state.bgType === 'gradient') {
    const dir = GRAD_DIRS[state.gradientDirection].css;
    const stops = state.useGradColor3
      ? `${state.bgColor}, ${state.gradientColor2}, ${state.gradientColor3}`
      : `${state.bgColor}, ${state.gradientColor2}`;
    previewContainer.style.background = `linear-gradient(${dir}, ${stops})`;
  } else {
    previewContainer.style.background = '';
    previewContainer.style.backgroundColor = state.bgColor;
  }
  // Aspect ratio (constrain height for square/portrait to match 16:9 height)
  const [w, h] = state.aspectRatio.split(':').map(Number);
  previewContainer.style.aspectRatio = `${w}/${h}`;
  if (h >= w) {
    previewContainer.style.maxWidth = `${(9 / 16 * w / h * 100).toFixed(1)}%`;
  } else {
    previewContainer.style.maxWidth = '';
  }
  // Text direction
  const titleVert = state.titleDirection === 'vertical';
  previewTitle.style.writingMode = titleVert ? 'vertical-rl' : '';
  previewTitle.style.textOrientation = titleVert ? 'mixed' : '';
  const sub1Vert = state.subtitle1Direction === 'vertical';
  previewSub1.style.writingMode = sub1Vert ? 'vertical-rl' : '';
  previewSub1.style.textOrientation = sub1Vert ? 'mixed' : '';
  const sub2Vert = state.subtitle2Direction === 'vertical';
  previewSub2.style.writingMode = sub2Vert ? 'vertical-rl' : '';
  previewSub2.style.textOrientation = sub2Vert ? 'mixed' : '';
  // Subtitle position relative to title
  const sp = state.subtitlePosition;
  const spHorizontal = sp === 'left' || sp === 'right';
  previewTextArea.style.flexDirection = spHorizontal ? 'row' : 'column';
  previewTextArea.style.alignItems = spHorizontal ? 'flex-start' : '';
  previewTitle.style.order = (sp === 'top' || sp === 'left') ? '1' : '0';
  previewSubsGroup.style.order = (sp === 'top' || sp === 'left') ? '0' : '1';
  previewTitle.style.flex = spHorizontal ? '1' : '';
  previewSubsGroup.style.flex = '';
  previewTextArea.style.gap = spHorizontal ? '12px' : '8px';
  // Font sizes
  const base = LAYOUT_FONT_BASE[state.layout];
  const tScale = FONT_SIZES[state.titleSize].scale;
  const s1Scale = FONT_SIZES[state.subtitle1Size].scale;
  const s2Scale = FONT_SIZES[state.subtitle2Size].scale;
  previewTitle.style.fontSize = `calc(${base.t} * ${tScale})`;
  previewSub1.style.fontSize = `calc(${base.s} * ${s1Scale})`;
  previewSub2.style.fontSize = `calc(${base.s} * ${s2Scale})`;
  // Title
  previewTitle.textContent = state.title || '';
  previewTitle.style.fontFamily = FONT_FAMILIES[state.titleFontFamily].css;
  previewTitle.style.fontWeight = state.titleFontWeight;
  previewTitle.style.color = state.titleColor;
  previewTitle.style.textAlign = titleVert ? '' : state.titleAlign;
  previewTitle.style.textShadow = 'none';
  previewTitle.style.webkitTextStroke = state.titleStroke ? `${state.titleStrokeWidth}px ${state.titleStrokeColor}` : '';
  previewTitle.style.paintOrder = state.titleStroke ? 'stroke fill' : '';
  previewTitle.style.display = state.title ? '' : 'none';
  // Gold gradient text (title)
  const titleHasGold = state.titleGold || state.textGradient;
  if (titleHasGold) {
    previewTitle.style.background = state.textGradient || GOLD_GRADIENT;
    previewTitle.style.backgroundClip = 'text';
    previewTitle.style.webkitBackgroundClip = 'text';
    previewTitle.style.webkitTextFillColor = 'transparent';
  } else {
    previewTitle.style.background = 'transparent';
    previewTitle.style.backgroundClip = '';
    previewTitle.style.webkitBackgroundClip = '';
    previewTitle.style.webkitTextFillColor = '';
  }
  // Subtitle 1
  previewSub1.textContent = state.subtitle1 || '';
  previewSub1.style.fontFamily = FONT_FAMILIES[state.subtitle1FontFamily].css;
  previewSub1.style.fontWeight = state.subtitle1FontWeight;
  previewSub1.style.color = state.subtitle1Color;
  previewSub1.style.textAlign = sub1Vert ? '' : state.subtitle1Align;
  previewSub1.style.textShadow = 'none';
  previewSub1.style.webkitTextStroke = state.subtitle1Stroke ? `${state.subtitle1StrokeWidth}px ${state.subtitle1StrokeColor}` : '';
  previewSub1.style.paintOrder = state.subtitle1Stroke ? 'stroke fill' : '';
  // Gold gradient text (sub1)
  const sub1HasGold = state.subtitle1Gold || state.textGradient;
  if (sub1HasGold) {
    previewSub1.style.background = state.textGradient || GOLD_GRADIENT;
    previewSub1.style.backgroundClip = 'text';
    previewSub1.style.webkitBackgroundClip = 'text';
    previewSub1.style.webkitTextFillColor = 'transparent';
  } else {
    previewSub1.style.background = 'transparent';
    previewSub1.style.backgroundClip = '';
    previewSub1.style.webkitBackgroundClip = '';
    previewSub1.style.webkitTextFillColor = '';
  }
  // Subtitle 2
  previewSub2.textContent = state.subtitle2 || '';
  previewSub2.style.fontFamily = FONT_FAMILIES[state.subtitle2FontFamily].css;
  previewSub2.style.fontWeight = state.subtitle2FontWeight;
  previewSub2.style.color = state.subtitle2Color;
  previewSub2.style.textAlign = sub2Vert ? '' : state.subtitle2Align;
  previewSub2.style.textShadow = 'none';
  previewSub2.style.webkitTextStroke = state.subtitle2Stroke ? `${state.subtitle2StrokeWidth}px ${state.subtitle2StrokeColor}` : '';
  previewSub2.style.paintOrder = state.subtitle2Stroke ? 'stroke fill' : '';
  // Gold gradient text (sub2)
  const sub2HasGold = state.subtitle2Gold || state.textGradient;
  if (sub2HasGold) {
    previewSub2.style.background = state.textGradient || GOLD_GRADIENT;
    previewSub2.style.backgroundClip = 'text';
    previewSub2.style.webkitBackgroundClip = 'text';
    previewSub2.style.webkitTextFillColor = 'transparent';
  } else {
    previewSub2.style.background = 'transparent';
    previewSub2.style.backgroundClip = '';
    previewSub2.style.webkitBackgroundClip = '';
    previewSub2.style.webkitTextFillColor = '';
  }
  // Band (targets subtitle1)
  if (state.bandEnabled && state.subtitle1) {
    previewBand.style.display = 'flex';
    previewBand.style.backgroundColor = state.bandColor;
    previewBandText.textContent = state.subtitle1;
    previewBandText.style.color = state.bandTextColor;
    previewBandText.style.fontFamily = FONT_FAMILIES[state.subtitle1FontFamily].css;
    previewBandText.style.fontWeight = state.subtitle1FontWeight;
    previewBandText.style.fontSize = `calc(${base.s} * ${s1Scale})`;
    previewBandText.style.textShadow = 'none';
    previewBandText.style.webkitTextStroke = state.subtitle1Stroke ? `${state.subtitle1StrokeWidth}px ${state.subtitle1StrokeColor}` : '';
    previewBandText.style.paintOrder = state.subtitle1Stroke ? 'stroke fill' : '';
    // Gold gradient for band text (only per-element toggle, not preset-level textGradient)
    if (state.subtitle1Gold) {
      previewBandText.style.background = GOLD_GRADIENT;
      previewBandText.style.backgroundClip = 'text';
      previewBandText.style.webkitBackgroundClip = 'text';
      previewBandText.style.webkitTextFillColor = 'transparent';
    } else {
      previewBandText.style.background = '';
      previewBandText.style.backgroundClip = '';
      previewBandText.style.webkitBackgroundClip = '';
      previewBandText.style.webkitTextFillColor = '';
    }
    const alignToBand = { left: 'start', center: 'center', right: 'end' };
    previewBand.className = `preview-band band-${state.bandType} band-${state.bandPosition} band-align-${alignToBand[state.subtitle1Align] || 'center'}`;
    previewSub1.style.display = 'none';
  } else {
    previewBand.style.display = 'none';
  }
  // Show/hide subtitles
  if (!state.bandEnabled) previewSub1.style.display = state.subtitle1 ? '' : 'none';
  previewSub2.style.display = state.subtitle2 ? '' : 'none';
  // Band-character overlap
  const bvl = state.bandEnabled && state.bandType === 'vertical' && state.bandPosition === 'left';
  const bvr = state.bandEnabled && state.bandType === 'vertical' && state.bandPosition === 'right';
  previewContainer.classList.toggle('band-push-left', bvl);
  previewContainer.classList.toggle('band-push-right', bvr);
  // Reference image
  let refPosClass = '';
  if (state.refEnabled) {
    previewRef.src = 'assets/logo-placeholder.svg';
    previewRefWrap.style.display = 'flex';
    if (state.refMode === 'character') {
      refPosClass = (CHAR_REL_POS[state.layout] || {})[state.refRelDir] || 'top-right';
    } else {
      refPosClass = (TEXT_REL_POS[state.layout] || {})[state.refRelDir] || 'top-right';
    }
    previewRefWrap.className = 'preview-ref-wrap logo-' + refPosClass;
  } else {
    previewRefWrap.style.display = 'none';
  }
  // Ref/text overlap avoidance
  if (state.refEnabled && !isTextOnly) {
    const textConflicts = {
      'char-left': ['center', 'middle-right'],
      'char-right': ['center', 'middle-left'],
    };
    if ((textConflicts[state.layout] || []).includes(refPosClass)) {
      previewTextArea.style.maxWidth = '40%';
    } else {
      previewTextArea.style.maxWidth = '';
    }
  } else {
    previewTextArea.style.maxWidth = '';
  }
  // UI visibility
  refSettings.style.display = state.refEnabled ? '' : 'none';
  refTextTargetRow.style.display = state.refMode === 'text' ? '' : 'none';
  solidControls.style.display = state.bgType === 'solid' ? 'contents' : 'none';
  gradControls.style.display = state.bgType === 'gradient' ? 'contents' : 'none';
  sceneControls.style.display = state.bgType === 'scene' ? 'contents' : 'none';
  gradC3Row.style.display = state.useGradColor3 ? 'flex' : 'none';
  bandSettings.style.display = state.bandEnabled ? 'contents' : 'none';
}

function updatePoseGrid() {
  poseGrid.querySelectorAll('.pose-card').forEach(c => {
    if (c.dataset.pose === 'custom') return;
    c.querySelector('img').src = getImagePath(c.dataset.pose, state.characterSize);
  });
}
function syncColors() {
  bgColorPicker.value = bgColorHex.value = state.bgColor;
  titleColorPicker.value = titleColorHex.value = state.titleColor;
  sub1ColorPicker.value = sub1ColorHex.value = state.subtitle1Color;
  sub2ColorPicker.value = sub2ColorHex.value = state.subtitle2Color;
  gradC1Picker.value = gradC1Hex.value = state.bgColor;
  gradC2Picker.value = gradC2Hex.value = state.gradientColor2;
  gradC3Picker.value = gradC3Hex.value = state.gradientColor3;
  bandColorPicker.value = bandColorHex.value = state.bandColor;
}
function updateSizeInfo() {
  const tPx = TITLE_PX[state.layout][state.titleSize];
  const s1Px = SUBTITLE_PX[state.layout][state.subtitle1Size];
  const s2Px = SUBTITLE_PX[state.layout][state.subtitle2Size];
  titleSizeInfo.textContent = `${tPx}px`;
  sub1SizeInfo.textContent = `${s1Px}px`;
  sub2SizeInfo.textContent = `${s2Px}px`;
}

function generatePrompt() {
  const L = state.layout;
  const lines = [];
  lines.push('サムネイル画像を作成してください。');
  // Background
  if (state.bgType === 'scene') {
    lines.push(`背景: ${SCENES[state.bgScene].ja}。`);
  } else if (state.bgType === 'gradient') {
    const d = GRAD_DIRS[state.gradientDirection];
    if (state.useGradColor3) {
      lines.push(`背景: ${state.bgColor}→${state.gradientColor2}→${state.gradientColor3}の3色グラデーション（${d.ja}）。`);
    } else {
      lines.push(`背景: ${state.bgColor}から${state.gradientColor2}へのグラデーション（${d.ja}）。`);
    }
  } else {
    const pn = state.activePreset ? PRESETS[state.activePreset]?.name : null;
    lines.push(`背景色: ${state.bgColor}${pn ? `（${pn}）` : ''}。`);
  }
  // Character
  if (L !== 'text-only') {
    const sz = CHAR_SIZES[state.characterSize].ja;
    if (state.poseMode === 'custom' && state.poseAction) {
      lines.push(`人物: ${state.poseAction}。${sz}。`);
    } else {
      const po = POSES[state.pose].nameJa;
      lines.push(`人物を${po}で配置。${sz}。`);
    }
  }
  // Layout (merged with spatial ordering when band is present)
  if (state.bandEnabled && state.bandType === 'vertical' && (L === 'char-left' || L === 'char-right')) {
    const bp = state.bandPosition;
    const orderMap = {
      'char-left:left':   '左から順に：縦帯 → 人物 → テキスト',
      'char-left:right':  '左から順に：人物 → テキスト → 縦帯',
      'char-right:left':  '左から順に：縦帯 → テキスト → 人物',
      'char-right:right': '左から順に：テキスト → 人物 → 縦帯',
    };
    lines.push(`レイアウト: ${orderMap[`${L}:${bp}`]}。`);
  } else {
    lines.push(`レイアウト: ${LAYOUTS[L].descJa}。`);
  }
  // Helpers
  const alignJa = { left: '左揃え', center: '中央揃え', right: '右揃え' };
  const vAlignJa = { left: '上揃え', center: '中央揃え', right: '下揃え' };
  const getAlign = (a, dir) => dir === 'vertical' ? (vAlignJa[a] || a) : (alignJa[a] || a);
  const strokeLabel = (s, c, w) => s ? `、${c}で${w}px縁取り` : '';
  const goldLabel = state.textGradient ? 'ゴールドグラデーション' : null;
  // Subtitle position relative to title
  if (state.subtitlePosition !== 'bottom') {
    const spJa = { top: '上', left: '左', right: '右' }[state.subtitlePosition];
    lines.push(`サブタイトルはタイトルの${spJa}に配置。`);
  }
  // Title
  const tfi = FONT_FAMILIES[state.titleFontFamily].name;
  const twn = FONT_WEIGHTS[state.titleFontWeight];
  const tPx = TITLE_PX[L][state.titleSize];
  const titleDirLabel = state.titleDirection === 'vertical' ? '縦書き' : '横書き';
  if (state.title) {
    const tColorDesc = (state.titleGold || goldLabel) ? 'ゴールドグラデーション' : state.titleColor;
    lines.push(`タイトル（${titleDirLabel}）: 「${state.title}」${tfi} ${twn} ${tPx}px（${tColorDesc}、${getAlign(state.titleAlign, state.titleDirection)}${strokeLabel(state.titleStroke, state.titleStrokeColor, state.titleStrokeWidth)}）。`);
  }
  // Subtitle 1
  const s1fi = FONT_FAMILIES[state.subtitle1FontFamily].name;
  const s1wn = FONT_WEIGHTS[state.subtitle1FontWeight];
  const s1Px = SUBTITLE_PX[L][state.subtitle1Size];
  const bandAlignJa = { left: state.bandType === 'vertical' ? '上揃え' : '左揃え', center: '中央揃え', right: state.bandType === 'vertical' ? '下揃え' : '右揃え' };
  if (state.subtitle1) {
    if (state.bandEnabled) {
      const bt = state.bandType === 'horizontal' ? '横帯' : '縦帯';
      const bp = state.bandPosition;
      const posJa = { top: '上端', bottom: '下端', left: '左端', right: '右端' }[bp] || bp;
      const ba = bandAlignJa[state.subtitle1Align] || '中央揃え';
      const bandTextColorDesc = state.subtitle1Gold ? 'ゴールドグラデーション' : state.bandTextColor;
      lines.push(`${state.bandColor}の${bt}を${posJa}に配置。帯テキスト: 「${state.subtitle1}」${s1fi} ${s1wn} ${s1Px}px（${bandTextColorDesc}、${ba}${strokeLabel(state.subtitle1Stroke, state.subtitle1StrokeColor, state.subtitle1StrokeWidth)}）。`);
    } else {
      const s1DirLabel = state.subtitle1Direction === 'vertical' ? '縦書き' : '横書き';
      const s1ColorDesc = (state.subtitle1Gold || goldLabel) ? 'ゴールドグラデーション' : state.subtitle1Color;
      lines.push(`サブタイトル1（${s1DirLabel}）: 「${state.subtitle1}」${s1fi} ${s1wn} ${s1Px}px（${s1ColorDesc}、${getAlign(state.subtitle1Align, state.subtitle1Direction)}${strokeLabel(state.subtitle1Stroke, state.subtitle1StrokeColor, state.subtitle1StrokeWidth)}）。`);
    }
  }
  // Subtitle 2
  const s2fi = FONT_FAMILIES[state.subtitle2FontFamily].name;
  const s2wn = FONT_WEIGHTS[state.subtitle2FontWeight];
  const s2Px = SUBTITLE_PX[L][state.subtitle2Size];
  if (state.subtitle2) {
    const s2DirLabel = state.subtitle2Direction === 'vertical' ? '縦書き' : '横書き';
    const s2ColorDesc = (state.subtitle2Gold || goldLabel) ? 'ゴールドグラデーション' : state.subtitle2Color;
    lines.push(`サブタイトル2（${s2DirLabel}）: 「${state.subtitle2}」${s2fi} ${s2wn} ${s2Px}px（${s2ColorDesc}、${getAlign(state.subtitle2Align, state.subtitle2Direction)}${strokeLabel(state.subtitle2Stroke, state.subtitle2StrokeColor, state.subtitle2StrokeWidth)}）。`);
  }
  // Reference image
  if (state.refEnabled) {
    const dirJa = { above: 'すぐ上', below: 'すぐ下', left: 'すぐ左', right: 'すぐ右' }[state.refRelDir] || '';
    let posDesc;
    if (state.refMode === 'character') {
      posDesc = `人物の${dirJa}`;
    } else {
      const tgt = { title: 'タイトル', subtitle1: 'サブタイトル1', subtitle2: 'サブタイトル2' }[state.refTextTarget] || 'タイトル';
      posDesc = `${tgt}の${dirJa}`;
    }
    lines.push(`参照画像を${posDesc}に配置（他の要素と重ならないこと）。`);
  }
  // Critical requirements
  lines.push('');
  lines.push('【重要条件】');
  if (L !== 'text-only') lines.push('- 人物は添付された人物画像をそのまま使用すること。');
  if (state.refEnabled) lines.push('- 参照画像は添付された参照画像をそのまま使用すること。');
  lines.push('- テキストは画像内に収め、見切れないようにする。');
  lines.push('- 人物とテキストが重ならないようにする。');
  lines.push('- テキストは背景に直接配置する。テキストの背後に白い四角・枠・背景ボックスを入れない。');
  lines.push('- 低品質禁止・その他の余計なテキストを含めない。');
  promptOutput.value = lines.join('\n');
}

function constrainVerticalText() {
  const h = previewContainer.offsetHeight;
  if (!h) return;
  const maxH = Math.floor(h * 0.85) + 'px';
  previewTitle.style.maxHeight = (previewTitle.style.writingMode === 'vertical-rl') ? maxH : '';
  previewSub1.style.maxHeight = (previewSub1.style.writingMode === 'vertical-rl' && previewSub1.style.display !== 'none') ? maxH : '';
  previewSub2.style.maxHeight = (previewSub2.style.writingMode === 'vertical-rl') ? maxH : '';
}

function updateAll() {
  updatePreview();
  updateSizeInfo();
  generatePrompt();
  requestAnimationFrame(constrainVerticalText);
}

// --- Event Listeners ---
poseGrid.addEventListener('click', e => {
  const c = e.target.closest('.pose-card'); if (!c) return;
  if (c.dataset.pose === 'custom') {
    state.poseMode = 'custom';
    poseGrid.querySelectorAll('.pose-card').forEach(p => p.classList.remove('active'));
    c.classList.add('active');
    poseGrid.querySelectorAll('.pose-card:not(.pose-custom)').forEach(p => p.classList.add('disabled'));
    poseActionInput.focus();
  } else {
    if (state.poseMode === 'custom') {
      poseGrid.querySelectorAll('.pose-card').forEach(p => p.classList.remove('disabled'));
    }
    state.poseMode = 'preset';
    state.pose = c.dataset.pose;
    state.poseAction = '';
    poseActionInput.value = '';
    setActive(poseGrid, '.pose-card', c);
  }
  updateAll();
});
charSizeGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.characterSize = b.dataset.value;
  setActive(charSizeGroup, '.toggle-btn', b); updatePoseGrid(); updateAll();
});
layoutGrid.addEventListener('click', e => {
  const b = e.target.closest('.layout-btn'); if (!b) return;
  state.layout = b.dataset.layout;
  setActive(layoutGrid, '.layout-btn', b); updateAll();
});
titleInput.addEventListener('input', () => { state.title = titleInput.value; updateAll(); });
sub1Input.addEventListener('input', () => { state.subtitle1 = sub1Input.value; updateAll(); });
sub2Input.addEventListener('input', () => { state.subtitle2 = sub2Input.value; updateAll(); });

// Align
titleAlignGroup.addEventListener('click', e => {
  const b = e.target.closest('.align-btn'); if (!b) return;
  state.titleAlign = b.dataset.align;
  setActive(titleAlignGroup, '.align-btn', b); updateAll();
});
sub1AlignGroup.addEventListener('click', e => {
  const b = e.target.closest('.align-btn'); if (!b) return;
  state.subtitle1Align = b.dataset.align;
  setActive(sub1AlignGroup, '.align-btn', b); updateAll();
});
sub2AlignGroup.addEventListener('click', e => {
  const b = e.target.closest('.align-btn'); if (!b) return;
  state.subtitle2Align = b.dataset.align;
  setActive(sub2AlignGroup, '.align-btn', b); updateAll();
});

// Subtitle position
subtitlePosGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.subtitlePosition = b.dataset.value;
  setActive(subtitlePosGroup, '.toggle-btn', b); updateAll();
});
// Direction
titleDirGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.titleDirection = b.dataset.value;
  setActive(titleDirGroup, '.toggle-btn', b); updateAll();
});
sub1DirGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.subtitle1Direction = b.dataset.value;
  setActive(sub1DirGroup, '.toggle-btn', b); updateAll();
});
sub2DirGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.subtitle2Direction = b.dataset.value;
  setActive(sub2DirGroup, '.toggle-btn', b); updateAll();
});

// Font family
titleFontFamilyGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.titleFontFamily = b.dataset.value;
  setActive(titleFontFamilyGroup, '.toggle-btn', b); updateAll();
});
sub1FontFamilyGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.subtitle1FontFamily = b.dataset.value;
  setActive(sub1FontFamilyGroup, '.toggle-btn', b); updateAll();
});
sub2FontFamilyGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.subtitle2FontFamily = b.dataset.value;
  setActive(sub2FontFamilyGroup, '.toggle-btn', b); updateAll();
});

// Font weight
titleFontWeightGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.titleFontWeight = b.dataset.value;
  setActive(titleFontWeightGroup, '.toggle-btn', b); updateAll();
});
sub1FontWeightGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.subtitle1FontWeight = b.dataset.value;
  setActive(sub1FontWeightGroup, '.toggle-btn', b); updateAll();
});
sub2FontWeightGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.subtitle2FontWeight = b.dataset.value;
  setActive(sub2FontWeightGroup, '.toggle-btn', b); updateAll();
});

// Size
titleSizeGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.titleSize = b.dataset.value;
  setActive(titleSizeGroup, '.toggle-btn', b); updateAll();
});
sub1SizeGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.subtitle1Size = b.dataset.value;
  setActive(sub1SizeGroup, '.toggle-btn', b); updateAll();
});
sub2SizeGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.subtitle2Size = b.dataset.value;
  setActive(sub2SizeGroup, '.toggle-btn', b); updateAll();
});

// Gold toggles
titleGoldBtn.addEventListener('click', () => {
  state.titleGold = !state.titleGold;
  titleGoldBtn.classList.toggle('active', state.titleGold);
  updateAll();
});
sub1GoldBtn.addEventListener('click', () => {
  state.subtitle1Gold = !state.subtitle1Gold;
  sub1GoldBtn.classList.toggle('active', state.subtitle1Gold);
  updateAll();
});
sub2GoldBtn.addEventListener('click', () => {
  state.subtitle2Gold = !state.subtitle2Gold;
  sub2GoldBtn.classList.toggle('active', state.subtitle2Gold);
  updateAll();
});

// Stroke toggles
titleStrokeBtn.addEventListener('click', () => {
  state.titleStroke = !state.titleStroke;
  if (state.titleStroke) {
    state.titleStrokeColor = contrastStrokeColor(state.titleColor);
    titleStrokeColorPicker.value = state.titleStrokeColor;
  }
  titleStrokeBtn.classList.toggle('active', state.titleStroke);
  titleStrokeBtn.classList.toggle('stroke-off', !state.titleStroke);
  titleStrokeBtn.textContent = state.titleStroke ? '袋文字ON' : '袋文字OFF';
  titleStrokeColorPicker.classList.toggle('stroke-inactive', !state.titleStroke);
  const d = state.titleStroke ? '' : 'none';
  titleStrokeWidthSlider.style.display = d;
  titleStrokeWidthLabel.style.display = d;
  updateAll();
});
titleStrokeColorPicker.addEventListener('input', () => {
  state.titleStrokeColor = titleStrokeColorPicker.value; updateAll();
});
titleStrokeWidthSlider.addEventListener('input', () => {
  state.titleStrokeWidth = parseFloat(titleStrokeWidthSlider.value);
  titleStrokeWidthLabel.textContent = state.titleStrokeWidth + 'px';
  updateAll();
});
sub1StrokeBtn.addEventListener('click', () => {
  state.subtitle1Stroke = !state.subtitle1Stroke;
  if (state.subtitle1Stroke) {
    state.subtitle1StrokeColor = contrastStrokeColor(state.subtitle1Color);
    sub1StrokeColorPicker.value = state.subtitle1StrokeColor;
  }
  sub1StrokeBtn.classList.toggle('active', state.subtitle1Stroke);
  sub1StrokeBtn.classList.toggle('stroke-off', !state.subtitle1Stroke);
  sub1StrokeBtn.textContent = state.subtitle1Stroke ? '袋文字ON' : '袋文字OFF';
  sub1StrokeColorPicker.classList.toggle('stroke-inactive', !state.subtitle1Stroke);
  const d = state.subtitle1Stroke ? '' : 'none';
  sub1StrokeWidthSlider.style.display = d;
  sub1StrokeWidthLabel.style.display = d;
  updateAll();
});
sub1StrokeColorPicker.addEventListener('input', () => {
  state.subtitle1StrokeColor = sub1StrokeColorPicker.value; updateAll();
});
sub1StrokeWidthSlider.addEventListener('input', () => {
  state.subtitle1StrokeWidth = parseFloat(sub1StrokeWidthSlider.value);
  sub1StrokeWidthLabel.textContent = state.subtitle1StrokeWidth + 'px';
  updateAll();
});
sub2StrokeBtn.addEventListener('click', () => {
  state.subtitle2Stroke = !state.subtitle2Stroke;
  if (state.subtitle2Stroke) {
    state.subtitle2StrokeColor = contrastStrokeColor(state.subtitle2Color);
    sub2StrokeColorPicker.value = state.subtitle2StrokeColor;
  }
  sub2StrokeBtn.classList.toggle('active', state.subtitle2Stroke);
  sub2StrokeBtn.classList.toggle('stroke-off', !state.subtitle2Stroke);
  sub2StrokeBtn.textContent = state.subtitle2Stroke ? '袋文字ON' : '袋文字OFF';
  sub2StrokeColorPicker.classList.toggle('stroke-inactive', !state.subtitle2Stroke);
  const d = state.subtitle2Stroke ? '' : 'none';
  sub2StrokeWidthSlider.style.display = d;
  sub2StrokeWidthLabel.style.display = d;
  updateAll();
});
sub2StrokeColorPicker.addEventListener('input', () => {
  state.subtitle2StrokeColor = sub2StrokeColorPicker.value; updateAll();
});
sub2StrokeWidthSlider.addEventListener('input', () => {
  state.subtitle2StrokeWidth = parseFloat(sub2StrokeWidthSlider.value);
  sub2StrokeWidthLabel.textContent = state.subtitle2StrokeWidth + 'px';
  updateAll();
});

// Pose action
poseActionInput.addEventListener('input', () => { state.poseAction = poseActionInput.value; updateAll(); });

// Band (3-way toggle: none / horizontal / vertical)
bandModeGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  const val = b.dataset.value;
  if (val === 'none') {
    state.bandEnabled = false;
  } else {
    state.bandEnabled = true;
    state.bandType = val;
    if (val === 'horizontal' && !['top', 'bottom'].includes(state.bandPosition)) state.bandPosition = 'bottom';
    if (val === 'vertical' && !['left', 'right'].includes(state.bandPosition)) state.bandPosition = 'right';
  }
  setActive(bandModeGroup, '.toggle-btn', b);
  buildBandPosUI(); updateAll();
});
bandPosGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.bandPosition = b.dataset.value;
  setActive(bandPosGroup, '.toggle-btn', b); updateAll();
});

// Colors
function handleColor(field, val, syncFn) {
  if (/^#[0-9a-fA-F]{6}$/.test(val)) { state[field] = val; syncFn?.(); syncStrokeColors(); syncColors(); updateAll(); }
}
function clearPreset() {
  state.activePreset = null;
  state.textGradient = null;
  colorPresetGrid.querySelectorAll('.color-preset').forEach(e => e.classList.remove('active'));
}
bandColorPicker.addEventListener('input', e => handleColor('bandColor', e.target.value));
bandColorHex.addEventListener('input', e => handleColor('bandColor', e.target.value));

aspectRatioGrid.addEventListener('click', e => {
  const b = e.target.closest('.aspect-btn'); if (!b) return;
  state.aspectRatio = b.dataset.ratio;
  setActive(aspectRatioGrid, '.aspect-btn', b); updateAll();
});

bgTypeGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.bgType = b.dataset.value;
  if (state.bgType === 'gradient') state.activePreset = null;
  setActive(bgTypeGroup, '.toggle-btn', b); syncColors(); updateAll();
});
sceneTypeGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.bgScene = b.dataset.value;
  setActive(sceneTypeGroup, '.toggle-btn', b); updateAll();
});
colorPresetGrid.addEventListener('click', e => {
  const b = e.target.closest('.color-preset'); if (!b) return;
  const preset = PRESETS[b.dataset.preset];
  state.bgColor = b.dataset.bg; state.titleColor = b.dataset.fg;
  state.subtitle1Color = b.dataset.fg; state.subtitle2Color = b.dataset.fg;
  state.bandColor = b.dataset.fg; state.bandTextColor = b.dataset.bg;
  state.activePreset = b.dataset.preset;
  state.textGradient = preset?.fgGrad || null;
  setActive(colorPresetGrid, '.color-preset', b);
  gradPresetGrid.querySelectorAll('.gradient-preset').forEach(e => e.classList.remove('active'));
  state.activeGradPreset = null;
  syncStrokeColors(); syncColors(); updateAll();
});
gradPresetGrid.addEventListener('click', e => {
  const b = e.target.closest('.gradient-preset'); if (!b) return;
  const p = GRAD_PRESETS[b.dataset.preset];
  state.bgColor = p.c1; state.gradientColor2 = p.c2; state.gradientDirection = p.dir;
  if (p.c3) {
    state.gradientColor3 = p.c3;
    state.useGradColor3 = true;
    gradColor3Toggle.checked = true;
  } else {
    state.useGradColor3 = false;
    gradColor3Toggle.checked = false;
  }
  if (p.fg) {
    state.titleColor = p.fg; state.subtitle1Color = p.fg; state.subtitle2Color = p.fg;
    state.bandColor = p.fg; state.bandTextColor = p.c1;
  }
  state.activeGradPreset = b.dataset.preset;
  state.activePreset = null;
  state.textGradient = null;
  setActive(gradPresetGrid, '.gradient-preset', b);
  colorPresetGrid.querySelectorAll('.color-preset').forEach(e => e.classList.remove('active'));
  gradDirGroup.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === p.dir);
  });
  syncStrokeColors(); syncColors(); updateAll();
});

bgColorPicker.addEventListener('input', e => handleColor('bgColor', e.target.value, clearPreset));
bgColorHex.addEventListener('input', e => handleColor('bgColor', e.target.value, clearPreset));
titleColorPicker.addEventListener('input', e => handleColor('titleColor', e.target.value, clearPreset));
titleColorHex.addEventListener('input', e => handleColor('titleColor', e.target.value, clearPreset));
sub1ColorPicker.addEventListener('input', e => { handleColor('subtitle1Color', e.target.value, clearPreset); state.bandTextColor = state.subtitle1Color; });
sub1ColorHex.addEventListener('input', e => { handleColor('subtitle1Color', e.target.value, clearPreset); state.bandTextColor = state.subtitle1Color; });
sub2ColorPicker.addEventListener('input', e => handleColor('subtitle2Color', e.target.value, clearPreset));
sub2ColorHex.addEventListener('input', e => handleColor('subtitle2Color', e.target.value, clearPreset));
gradC1Picker.addEventListener('input', e => handleColor('bgColor', e.target.value));
gradC1Hex.addEventListener('input', e => handleColor('bgColor', e.target.value));
gradC2Picker.addEventListener('input', e => handleColor('gradientColor2', e.target.value));
gradC2Hex.addEventListener('input', e => handleColor('gradientColor2', e.target.value));
gradC3Picker.addEventListener('input', e => handleColor('gradientColor3', e.target.value));
gradC3Hex.addEventListener('input', e => handleColor('gradientColor3', e.target.value));
gradColor3Toggle.addEventListener('change', () => {
  state.useGradColor3 = gradColor3Toggle.checked;
  state.activeGradPreset = null;
  gradPresetGrid.querySelectorAll('.gradient-preset').forEach(e => e.classList.remove('active'));
  syncColors(); updateAll();
});

gradDirGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.gradientDirection = b.dataset.value;
  state.activeGradPreset = null;
  gradPresetGrid.querySelectorAll('.gradient-preset').forEach(e => e.classList.remove('active'));
  setActive(gradDirGroup, '.toggle-btn', b); updateAll();
});

// Reference image
refToggle.addEventListener('change', () => { state.refEnabled = refToggle.checked; updateAll(); });
refModeGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.refMode = b.dataset.value;
  setActive(refModeGroup, '.toggle-btn', b); updateAll();
});
refTextTargetGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.refTextTarget = b.dataset.value;
  setActive(refTextTargetGroup, '.toggle-btn', b); updateAll();
});
refRelDirGroup.addEventListener('click', e => {
  const b = e.target.closest('.toggle-btn'); if (!b) return;
  state.refRelDir = b.dataset.value;
  setActive(refRelDirGroup, '.toggle-btn', b); updateAll();
});

const ctaHtml = ' &mdash; このプロンプトで画像を生成するなら PostStudio へ <svg class="toast-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(promptOutput.value);
    showToast('コピーしました', ctaHtml);
    createConfetti();
  } catch {
    promptOutput.select();
    document.execCommand('copy');
    showToast('コピーしました', ctaHtml);
    createConfetti();
  }
});

// --- Usage modal ---
const usageModal = $('usageModal');
const usageBtn = $('usageBtn');
const usageClose = $('usageClose');
usageBtn.addEventListener('click', () => usageModal.classList.add('show'));
usageClose.addEventListener('click', () => usageModal.classList.remove('show'));
usageModal.addEventListener('click', e => { if (e.target === usageModal) usageModal.classList.remove('show'); });

// --- Init ---
gradColor3Toggle.checked = state.useGradColor3;
buildBandPosUI();
syncColors();
updateAll();
