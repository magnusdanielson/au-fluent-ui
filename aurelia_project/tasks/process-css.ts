import {build} from 'aurelia-cli';
import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as sass from 'gulp-dart-sass';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source, {sourcemaps: true})
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(build.bundle());
}

export function pluginCSS(dest) {
  return function processPluginCSS() {
    return gulp.src(project.plugin.source.css)
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest(dest));
  };
}
