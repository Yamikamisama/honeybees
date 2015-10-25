//
//  AddGeotificationViewController.swift
//  Geotify
//
//  Created by Ken Toh on 24/1/15.
//  Copyright (c) 2015 Ken Toh. All rights reserved.
//

import UIKit
import MapKit

protocol AddGeotificationsViewControllerDelegate {
  func addGeotificationViewController(controller: AddGeotificationViewController, didAddCoordinate coordinate: CLLocationCoordinate2D,
    radius: Double, identifier: String, note: String, eventType: EventType)
}

var todoItem = [String]()
var destination = [String]()

class AddGeotificationViewController: UITableViewController {

  @IBOutlet var addButton: UIBarButtonItem!
  @IBOutlet var zoomButton: UIBarButtonItem!

  @IBOutlet weak var eventTypeSegmentedControl: UISegmentedControl!
  @IBOutlet weak var radiusTextField: UITextField!
  @IBOutlet weak var noteTextField: UITextField!
  @IBOutlet weak var mapView: MKMapView!

  var delegate: AddGeotificationsViewControllerDelegate!
    
    @IBOutlet var todoListTable: UITableView!

//    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
//        return todoItem.count
//    }
//    
//    
//    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell{
//        let cell = UITableViewCell(style: UITableViewCellStyle.Value1, reuseIdentifier: "cell")
//        
//        cell.textLabel?.text = destination[indexPath.row]
//        cell.detailTextLabel?.text = todoItem[indexPath.row]
//        
//        return cell
//    }
//    
//    
//    override func tableView(tableView: UITableView, commitEditingStyle editingStyle: UITableViewCellEditingStyle, forRowAtIndexPath indexPath: NSIndexPath){
//        
//        if editingStyle == UITableViewCellEditingStyle.Delete {
//            
//            todoItem.removeAtIndex(indexPath.row)
//            
//            NSUserDefaults.standardUserDefaults().setObject(todoItem, forKey: "todoItem")
//            
//            todoListTable.reloadData()
//            
//        }
//        
//    }


  override func viewDidLoad() {
    super.viewDidLoad()

    navigationItem.rightBarButtonItems = [addButton, zoomButton]
    addButton.enabled = false

    tableView.tableFooterView = UIView()
    
    
    if NSUserDefaults.standardUserDefaults().objectForKey("todoItem") != nil {
        todoItem = NSUserDefaults.standardUserDefaults().objectForKey("todoItem") as! [String]
    }
    if NSUserDefaults.standardUserDefaults().objectForKey("todoDestination") != nil {
        destination = NSUserDefaults.standardUserDefaults().objectForKey("todoDestination") as! [String]
    }

  }

  @IBAction func textFieldEditingChanged(sender: UITextField) {
    addButton.enabled = !radiusTextField.text!.isEmpty && !noteTextField.text!.isEmpty
  }

  @IBAction func onCancel(sender: AnyObject) {
    dismissViewControllerAnimated(true, completion: nil)
  }

    @IBAction private func onAdd(sender: AnyObject) {
        let coordinate = mapView.centerCoordinate
        let radius = (radiusTextField.text as! NSString).doubleValue
        let identifier = NSUUID().UUIDString
        let note = noteTextField.text
        let eventType = (eventTypeSegmentedControl.selectedSegmentIndex == 0) ? EventType.OnEntry : EventType.OnExit
        delegate!.addGeotificationViewController(self, didAddCoordinate: coordinate, radius: radius, identifier: identifier, note: note!, eventType: eventType)
    }

  @IBAction private func onZoomToCurrentLocation(sender: AnyObject) {
    zoomToUserLocationInMapView(mapView)
  }
}
