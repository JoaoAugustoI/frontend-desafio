import { stringify } from '@angular/compiler/src/util';
import { Component,OnInit } from '@angular/core';
import { Lancamento } from './models/lancamento';
import { LancamentoService } from './services/lancamento.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit 
{
  impressao : string;

  constructor(private lancamento : LancamentoService)
  {

  }

  ngOnInit()
  {
    this.getLancamento()
  }

  getLancamento()
  {
    this.lancamento.getDados().subscribe((res: Lancamento[])=>
    {
      this.impressao = "Data do lançamento | Descrição | Número | Situação | Data de confirmação | Dados bancários | Valor final <br><br>";
      for(var i = 0;i<res.length;i++)
      {
        this.impressao+=
            res[i].data_lancamento + " | "
          + res[i].descricao +" | "
          + res[i].numero +" | "
          + res[i].situacao +" | "
          + res[i].data_confirmacao+" | "
          +res[i].dados_bancarios+" | R$ "
          +this.formatReal(res[i].valor_final*100)
          +"<br>"
          
        }

      //this.impressao
    })
  }

  formatReal( int )
  {
    var tmp = int+'';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if( tmp.length > 6 )
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
  }
}




