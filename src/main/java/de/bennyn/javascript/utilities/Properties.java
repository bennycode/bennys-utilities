package de.bennyn.javascript.utilities;

import java.io.File;
import java.net.URL;

public class Properties {

    public String getPath(String relativePath) {
        URL resource = getClass().getClassLoader().getResource(relativePath);
        File file = new File(resource.getFile());
        
        return file.getAbsolutePath();
    }
}
