import nodeResolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import scss from 'rollup-plugin-scss';
import uglify from 'rollup-plugin-uglify';
import es3 from 'rollup-plugin-es3';

export default {
	entry: 'index.js',
	dest: 'dist/bundle.js',
	format: 'iife',
	external: [],
	plugins: [
		scss({
			output: true,
			output: 'dist/bundle.css'
		}),
		buble({
			jsx: 'h'
		}),
		nodeResolve({
			modules: true,
			jsnext: true
		}),
		uglify({
			comments: false,
			mangle: { toplevel: true },
			mangleProperties: { regex: /^_/ }
		}),
		es3()
	]
};