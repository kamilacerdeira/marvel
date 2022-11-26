export interface Character {
  /**
   * @prop id The unique ID of the character resource.
   * @prop name The name of the character.
   * @prop description A short bio or description of the character.
   * @prop modified The date the resource was most recently modified.
   * @prop resourceURI The canonical URL identifier for this resource.
   * @prop urls A set of public web site URLs for the resource.
   * @prop thumbnail The representative image for this character.
   * @prop comics A resource list containing comics which feature this character.
   * @prop stories A resource list of stories in which this character appears.
   * @prop events A resource list of events in which this character appears.
   * @prop series A resource list of series in which this character appears
   */
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  thumbnail?: Image;
  comics?: ComicList;
  // stories?: StoryList,
  // events?: EventList,
  // series?: SeriesList,
}

/**
 * @prop path The directory path of to the image.
 * @prop extension The file extension for the image.
 */
export interface Image {
  path?: string;
  extension?: string;
}

/**
 * @prop available The number of total available issues in this list. Will always be greater than or equal to the "returned" value.
 * @prop returned The number of issues returned in this collection (up to 20).
 * @prop collectionURI The path to the full list of issues in this collection.
 * @prop items The list of returned issues in this collection.
 */
export interface ComicList {
  available?: number;
  returned?: number;
  collectionURI?: string;
}

/**
 * @prop id The unique ID of the comic resource.
 * @prop title The canonical title of the comic.
 * @prop description The preferred description of the comic.
 * @prop isbn The ISBN for the comic (generally only populated for collection formats).
 * @prop format The publication format of the comic e.g. comic, hardcover, trade paperback.
 * @prop pageCount The number of story pages in the comic.
 * @prop series A summary representation of the series to which this comic belongs.
 * @prop thumbnail The representative image for this comic.
 */
export interface Comic {
  id?: number;
  title?: string;
  description?: string;
  isbn?: string;
  format?: string;
  pageCount?: number;
  thumbnail?: Image;
}
