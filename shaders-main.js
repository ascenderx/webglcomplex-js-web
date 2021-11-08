const mainVertexSource = `#version 100
precision highp float;

attribute vec2 aPosition;

void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const mainFragmentSource = `#version 100
precision highp float;

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform vec2 uOffset;
uniform float uZoom;

void main() {
  //vec2 z = gl_FragCoord.xy - center;
  
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;
