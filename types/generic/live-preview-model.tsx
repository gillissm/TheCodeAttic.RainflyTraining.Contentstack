
/**
 * LivePreviewTypeMapper<T> is a generic type that transforms each property of a given type `T` 
 * into an object containing a `data-cslp` property of type `string`.
 *
 * This type mapping ensures that every key in `T` is retained, but its value is replaced 
 * with an object structured as `{ data-cslp: string }`.
 *
 * @template T - The original type whose properties will be transformed.
 */
export type LivePreviewTypeMapper<T> = {
  [K in keyof T]: { 'data-cslp': string }
}
// live preview mode type
export type LivePreviewMode = 'builder' | 'preview' | undefined;

// PersonalizeConfig Type <----
export type PersonalizeConfig = EntryContentstack & {
  audiences: Audiences
  taxonomy_path: string
}

export type Audiences = {
  group?: Group[]
}

export type Group = {
  name?: string
  attributes?: Attributes[]
}

export type Attributes = {
  key?: string
  value?: string
}

/* The `CommonSystemInfo` interface defines the common system information of Contentstack's Entry and Asset */
export interface CommonSystemInfo {
  ACL?: {
    roles: [],
    others: {
      read: false,
      create: false,
      update: false,
      delete: false,
      sub_acl: {
        read: false,
        create: false,
        update: false,
        delete: false,
        publish: false
      }
    }
  }
  created_at?: string
  created_by?: string
  publish_details?: {
    environment: string
    locale: string
    time: Date
    user: string
  }
  tags?: string[]
  title?: string
  uid:string
  updated_at?: Date
  updated_by?: string
}

// Contentstack Entry Type
export type EntryContentstack = CommonSystemInfo & {
  $?: LivePreviewTypeMapper<EntryContentstack & CommonSystemInfo>
  locale?: string
  _in_progress?: boolean
  _owner?: {
    active: boolean
    authy_id?: string
    company: string
    country_code: string
    created_at: Date
    email: string
    failed_attempts: number
    first_name: string
    last_login_at: Date
    last_name: string
    // metadata: {}
    mobile_number: string
    org_uid: string[]
    profile_type: string
    settings: {
      global: any[]
      preferences: any
    },
    shared_org_uid: string[]
    tfa_status: string
    updated_at: string
    username: string
  }
  _version?: number
}