// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUser from '../../../app/controller/user';
import ExportUserAccess from '../../../app/controller/userAccess';

declare module 'egg' {
  interface IController {
    user: ExportUser;
    userAccess: ExportUserAccess;
  }
}
