export interface ISession {
  name:string
  presenter:string
  duration:number
  eventId?:number
  level:string
  abstract:string
  id:number | undefined
  voters:string[]

}
