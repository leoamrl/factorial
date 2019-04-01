<?php

if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {

  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $telefone = $_POST['telefone'];

  $data = date('d-m-Y H:i:s');

  $subject = $nome.' - [Nome Empresa]';
  $body = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Leo Amaral Desenvolvedor</title><link href="https://fonts.googleapis.com/css?family=Rajdhani|Teko" rel="stylesheet"> <style> @import url("https://fonts.googleapis.com/css?family=Rajdhani|Teko"); </style> <style type="text/css">* {line-height: 140%;} body { border: 4px solid #BF2926; background: #eeeeee; margin: 0 auto; } table { margin: 0 auto; } </style></head><body style="background: #eeeeee; border: 4px solid #BF2926; margin: 0 auto;"> <table cellspacing="0" cellpadding="0" width="100%" bgcolor="#BF2926" style="margin: 0 auto;"></table><table cellspacing="0" cellpadding="0" width="100%" style="margin: 0 auto;"><tr><td width="100%"><div align="center"><img border="0" src="http://pagupropaganda.com.br/email-lead/space.png" width="100%" height="70" style="margin:0;vertical-align:top;display:block;"></div></td></tr> </table><table cellspacing="0" cellpadding="0" width="600" bgcolor="#ffffff" style="margin: 0 auto; font-family: Rajdhani, Teko, sans-serif; color: #000000;"><tr><td width="600"><div align="center"><img border="0" src="http://pagupropaganda.com.br/email-lead/space.png" width="600" height="70" style="margin:0;vertical-align:top;display:block;"></div></td></tr><tr><td width="600"><table cellspacing="0" cellpadding="0" width="600"><tr><td width="80"></td><td width="440"><div align="center"><p style="margin: 0; font-family: Teko, sans-serif; font-size: 36px; text-align: center;color: #000000;">Um novo lead acaba de ser recebido através da landing page!</p><img border="0" src="http://pagupropaganda.com.br/email-lead/space.png" width="440" height="50" style="margin:0;vertical-align:top;display:block;"><p style="margin: 0; font-family: Rajdhani, sans-serif; font-size: 18px;text-align: left; color: #000000;"><strong style="text-transform: uppercase; font-size: 22px;">Dados do Lead<br>---</strong><br><br><strong>Origem do Lead: </strong> http://www.nomempresa.com.br<br><strong>Recebido em: </strong> '.$data.'<br><strong>Nome: </strong> '.$nome.'<br><strong>E-mail: </strong> '.$email.'<br><strong>Telefone: </strong> '.$telefone.'<br></p></div></td><td width="80"></td></tr></table></td></tr><tr><td width="600"><div align="center"><img border="0" src="http://pagupropaganda.com.br/email-lead/space.png" width="600" height="70" style="margin:0;vertical-align:top;display:block;"></div></td></tr></table><table cellspacing="0" cellpadding="0" width="100%" style="margin: 0 auto;"><tr><td width="100%"><div align="center"><img border="0" src="http://pagupropaganda.com.br/email-lead/space.png" width="100%" height="70" style="margin:0;vertical-align:top;display:block;"></div></td></tr> </table> <link href="https://fonts.googleapis.com/css?family=Rajdhani|Teko" rel="stylesheet"> <style> @import url("https://fonts.googleapis.com/css?family=Rajdhani|Teko"); </style><style type="text/css">* {line-height: 140%;} body { border: 4px solid #BF2926; background: #eeeeee; margin: 0 auto; } table { margin: 0 auto; } </style></body></html>';

  $csv = $nome.';'.$telefone.';'.$email.';'.$data.';BREAK'.PHP_EOL;

  $fp = fopen("lista.csv", "a");
  $escreve = fwrite($fp, $csv);
  fclose($fp);

  $headers   = array();
  $headers[] = "MIME-Version: 1.0";
  $headers[] = "Content-type: text/html; charset=UTF-8";
  $headers[] = 'From: Nome Empresa <contato@nomeempresa.com.br>';
  $headers[] = 'Reply-To: '.$nome.'<'.$email.'>';
  $headers[] = 'Cc: Nome <nome@email.com.br>';
  $headers[] = "X-Mailer: PHP/".phpversion();

  mail('nome@email.com.br', $subject, $body, $headers);
  exit;

}
?>