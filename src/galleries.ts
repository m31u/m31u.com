import { readdirSync, statSync } from "fs";
import path from "path";
import { cwd } from "process";

export const publicDir = "public";
export const galleriesDir = "galleries";
export const galleriesRoot = path.join(publicDir, galleriesDir);

export const galleryList = readdirSync(path.join(cwd(), "public/galleries"))
    .filter((file) => {
        return statSync(path.join(cwd(), galleriesRoot, file)).isDirectory();
    })

export function getGalleryPath(photo_gallery: string) {
    return path.join(cwd(), galleriesRoot, photo_gallery)
}

export function getGalleryPhotoUri(photo_gallery: string, photo: string) {
    return path.join("/", galleriesDir, photo_gallery, photo)
}

export function getGalleryPhotoList(photo_gallery: string) {
    return (galleryPath => readdirSync(
        galleryPath
    ).filter(file => {
        return statSync(path.join(galleryPath, file))
    }))(getGalleryPath(photo_gallery))
}

export function getGalleryPhotoPath(photo_gallery: string, photo: string) {
    return path.join(cwd(), galleriesRoot, photo_gallery, photo)
}

export function getGalleryTextName(photo_gallery: string) {
    return photo_gallery.split("_").join(" ")
}