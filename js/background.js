const backgroundArr = [
  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )",
  "linear-gradient( 68.3deg,  rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2% )",
  "linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)",
  "radial-gradient( circle farthest-corner at 13.7% 27.1%,  rgba(239,53,188,1.05) 13.6%, rgba(185,28,225,1.00) 90% )",
  "linear-gradient( 63.1deg,  rgba(5,23,111,1) 16.4%, rgba(24,95,240,1) 64.5% )",
  "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% )",
  "linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% )",
  "linear-gradient( 358.4deg,  rgba(249,151,119,1) -2.1%, rgba(98,58,162,1) 90% )"
];

const randomBackground =
  backgroundArr[Math.floor(Math.random() * backgroundArr.length)];

document.body.style.backgroundImage = randomBackground;
