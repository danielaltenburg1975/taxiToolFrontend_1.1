import { Component } from '@angular/core';
import { VisibleService } from 'src/app/services/visible.service';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss']
})
export class AdminSettingComponent {

  constructor(private visibleService: VisibleService) {}

  toggleAdminSettingVisibility(): boolean {
    return this.visibleService.getAdminSettingsVisible();
  }

}
