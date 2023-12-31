import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { UIHelpers } from 'src/app/helpers/ui-helpers'
import { ApiService } from '../services/api.service'



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
[x: string]: any
    loginForm !: FormGroup
    loginLoading = false
    webSite: any
    tech: any
    stripeUrlId: any
    isLogin = true

    constructor(
        private api: ApiService,
        public router: Router,
        private fb: FormBuilder,
        public ui: UIHelpers,
        private route: ActivatedRoute,
        
    ) {
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            youremail: new FormControl(null, [
                Validators.required,
                Validators.maxLength(100),
                Validators.email
            ]),
            yourpassword: new FormControl(null, [Validators.required])
        })
       
    }

    get g() {
        return this.loginForm.controls
    }

    login(data: any) {
        
        if (data.status === 'INVALID') {
            alert('Please fill-in valid data in all fields & try again.')
            return
        }
        const params = {
            email: data.value.youremail,
            password: data.value.yourpassword,
        }
        this.api.login(params).subscribe((resp: any) => {
            if (resp.success === false) {
                console.log(resp)
                alert('Invalid Username and password')
                return
            }
            this.api.user = resp.data
            localStorage.setItem('token', resp.token)
            localStorage.setItem('user', JSON.stringify(resp.data))
            if(resp.data.role == 'admin') {
                this.router.navigate(['/admin'])
            } else {
                this.router.navigate(['/home'])
            }
            console.log('Logined')
            // alert('Login successfully!!')
        })
    }
}

