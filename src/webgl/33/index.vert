attribute vec4 onePosition;
attribute vec4 oneNormal;
varying vec4 twoColor;

uniform mat4 viewMatrix;
void main() {
    vec4 oneColor = vec4(1.0, 0.0, 0.0, 1.0);
    vec4 view = viewMatrix * onePosition;

    vec4 uLightColor = vec4(1.0, 0.0, 0.0, 1.0);
    vec4 uLightPosition = vec4(-5.0, 6.0, 10.0, 1.0);

    vec4 uAmbientColor = vec4(0.2, 0.2, 0.2, 1.0);

    vec4 uLightDirection = normalize(uLightPosition - view);

    vec4 unAmbientColor = uAmbientColor * oneColor;

    float deg = dot(uLightDirection,  oneNormal);

    vec4 unLightColor = uLightColor * oneColor * deg;


    twoColor = uAmbientColor + unLightColor;
    gl_Position = view;
}