import { terser } from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default [{
    input: 'src/ReactBootstrapTreeview.js',
    external: ['react'],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        terser(),
        commonjs()
    ],
    output: {
        format: 'umd',
        name: 'ReactBootstrapTreeview',
        globals: {
            'react': 'React',
            'prop-types': 'PropTypes'
        }
    },
    
}]