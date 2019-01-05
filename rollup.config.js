import nodeResolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import sass from 'rollup-plugin-sass';
import { uglify } from 'rollup-plugin-uglify';
import es3 from 'rollup-plugin-es3';

export default {
	input: 'index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife'
	},
	external: [],
	plugins: [
		sass({
			output: 'dist/bundle.css',
		}),
		buble({
			jsx: 'h'
		}),
		nodeResolve({
			modules: true,
			jsnext: true
		}),
		uglify({
			output: { comments: false },
			mangle: {
				toplevel: true,
				properties: { regex: /^_/ }
			}
		}),
		es3()
	]
};