import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoomService } from '../services/room.service';

export const roomGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const roomService = inject(RoomService)
  const roomId = route.params['id']
  const idTeam = localStorage.getItem('id')
  // console.log(roomId)
  return roomService.validateTeamExist(roomId, idTeam).toPromise().then(canAccess => {
    if(canAccess) {
      return true;
    }else {
      alert('No perteneces a la sala');
      router.navigate(['home'])
      return false
    }
  }).catch(err => {
    alert('Error en el servidor')
    router.navigate(['home'])
    return false;
  })
};
