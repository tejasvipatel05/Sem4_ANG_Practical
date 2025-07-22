import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  if(!localStorage.getItem('username')){
    _router.navigate(['authentication'])
    return false;
  } else{
    return true;
  }
};
