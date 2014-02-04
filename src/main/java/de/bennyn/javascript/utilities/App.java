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
      // http://stackoverflow.com/a/7451828/451634
      url = ("file:" + url).replace("\\", "/");
      URI uri = new URI(url);
      Desktop.getDesktop().browse(uri);
    } else {
      // Ubuntu
      Runtime runtime = Runtime.getRuntime();
      runtime.exec("/usr/bin/firefox -new-window " + url);
    }
  }
}
