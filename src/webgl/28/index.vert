attribute vec4 onePosition;
attribute vec4 oneColor;
varying vec4 twoColor;

uniform mat4 viewMatrix;
void main() {
    twoColor = oneColor;
    gl_Position = viewMatrix * onePosition;
}