import { Component } from '@angular/core';

export interface MusicTable {
  id: number;
  nameMusic: string;
  nameFileMusic: string
}

const tableData: MusicTable[] = [
  {
    id: 1,
    nameMusic: 'Звук природы',
    nameFileMusic: 'audio1.mp3'
  },
  {
    id: 2,
    nameMusic: 'Звук природы 2',
    nameFileMusic: 'audio_priroda.mp3'
  },
  {
    id: 3,
    nameMusic: 'Звук котенка',
    nameFileMusic: 'audio_cat.mp3'
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayedColumns: string[] = ['id', 'nameMusic', 'nameFileMusic'];
  dataSource = tableData;

  audioPlayerFile: string = '';
  audioPlayerName: string = '';

  getAudio(nameFileMusic: string, nameMusic: string) {
    this.audioPlayerFile = 'assets/audio/' + nameFileMusic
    this.audioPlayerName = nameMusic
  }
}
