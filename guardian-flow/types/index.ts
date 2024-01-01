export interface Anomalia {
  id: string;
  data: Date;
  protocollo: string;
  porta: number;
  stato: boolean;
  ip_sorgente: string;
  ip_destinazione: string;
}
export interface Piano {
  id: string;
  nome: string;
  descrizione: string;
  prezzo: number;
}
export interface Utente {
  id: number;
  username: string;
  nome: string;
  cognome: string;
  permessi: string;
  azienda_id: number;
  two_factor: boolean;
  two_factor_token: string;
}
