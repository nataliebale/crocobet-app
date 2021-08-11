import { NotifierService } from "angular-notifier";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  constructor(private notifier: NotifierService) {}

  sayDefault(defaultMsg: string): void {
    this.notifier.notify("default", defaultMsg);
  }

  saySuccess(successMessage: string): void {
    this.notifier.notify("success", successMessage);
  }

  sayError(error: string): void {
    this.notifier.notify("error", error);
  }

  sayWarning(warning: string): void {
    this.notifier.notify("warning", warning);
  }

  sayInfo(info: string): void {
    this.notifier.notify("info", info);
  }
}
