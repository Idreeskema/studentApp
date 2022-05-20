import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  size: string = 'normal';
  lang: string = 'es';
  theme: string = 'light';
  type: string = 'image';

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;
  login!: FormGroup;
  responseData: any;
  constructor(
    private _http: HttpClient,
    private router: Router,
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}
  siteKey: any = '6LeFqtceAAAAAKPbiyP55R4HKbD4kj4qzU5uzltb';
  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^[0-9a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
        ),
      ]),
      password: new FormControl('', [Validators.required]),
      recaptcha: new FormControl(null, [Validators.required]),
    });
  }
  handleLoad() {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  handleSuccess(captchaResponse: string): void {
    console.log('response: ', captchaResponse);

    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }
  Login() {
    if (this.login.valid) {
      this.dataService
        .Loginprocess(this.login.value)
        .subscribe((result: any) => {
          if (result != null) {
            this.responseData = result;
            localStorage.setItem(
              'Access Token',
              this.responseData.access_token
            );
            this.router.navigate(['/']);
            console.log('Login Sucessfully');
          } else {
            console.log('incorrect password')
            alert('Incorrect Password');
          }
        });
    }
  }
}
