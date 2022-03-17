import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumPhotosComponent} from './album-photos/album-photos.component';
import {AlbumDetailComponent} from './album-detail/album-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:album_id', component: AlbumDetailComponent },
  { path: 'albums/:album_id/photos', component: AlbumPhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
