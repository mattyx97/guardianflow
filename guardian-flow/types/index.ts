export interface Anomalia {
  id: string;
  data: Date;
  protocollo: string;
  porta: number;
  stato: boolean;
  ip_sorgente: string;
  ip_destinazione: string;
}
