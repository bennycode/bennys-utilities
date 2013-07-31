package de.bennyn.javascript.utilities;

import java.awt.Desktop;
import java.net.URI;

public class App {

    public static void main(String[] args) throws Exception {

        Properties properties = new Properties();
        
        String relativePath = "js/index.html";
        String url = properties.getSourcePath(relativePath);

        if (Desktop.isDesktopSupported()) {
            // Windows
            Desktop.getDesktop().browse(new URI(url));
        } else {
            // Ubuntu
            Runtime runtime = Runtime.getRuntime();
            runtime.exec("/usr/bin/firefox -new-window " + url);
        }
    }
}
