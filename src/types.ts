export interface StorePropsType {
  url: string
}

export interface ApplicationCardPropsType {
  title: string,
  description: string,
  avatar: string,
  android_link: string,
  ios_link: string
}

export interface CategoryPropsType {
  name: string,
  applications: ReadonlyArray<ApplicationCardPropsType>
}