import nodeResolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import sass from 'rollup-plugin-sass';
import { uglify } from 'rollup-plugin-uglify';
import es3 from 'rollup-plugin-es3';
import svgi from 'rollup-plugin-svgi';

export default {
	input: 'index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife'
	},
	external: [],
	plugins: [
		svgi({
			options: {
				jsx: 'preact',
			}
		}),
		sass({
			output: 'dist/bundle.css',
		}),
		buble({
			jsx: 'h',
			objectAssign: 'Object.assign'
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