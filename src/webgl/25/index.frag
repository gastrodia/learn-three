precision lowp float;

void main() {
    float x = abs(gl_FragCoord.x) / 500.0;
    float y = abs(gl_FragCoord.y) / 500.0;
    gl_FragColor = vec4(x, y, 0.0, 1.0);
}