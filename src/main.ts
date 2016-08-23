import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import 'simple-line-icons/less/simple-line-icons.less';
import './assets/css/modern.min.css'; // @TODO: rewrite to less
import 'animate.css/animate.css';
import './assets/css/style.css';

import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);
